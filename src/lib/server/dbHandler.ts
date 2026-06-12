import * as mariadb from "mariadb";
import { config } from "dotenv";
config();

export const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 1
});

export const getPeople = async () => {
    const conn = await pool.getConnection();
    const req = await conn.query("SELECT * FROM henkilo ORDER BY lyhenne;");
    
    conn.release();

    return req;
}

export const getShiftTypes = async () => {
    const conn = await pool.getConnection();
    const req = await conn.query("SELECT * FROM vuorotyyppi ORDER BY nro;");
    
    conn.release();

    return req;
}

export const getShifts = async (day: string) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const dayDate = new Date(day);

        const shifts = await conn.query(`
            SELECT 
            V.id AS vuoroId,
            V.pv, V.vuoro AS vuorotyyppi,
            V.note, V.aika,
            H.id AS henkiloId,
            H.nimi AS henkilo,
            H.lyhenne
            FROM vuoro V INNER JOIN henkilo H ON V.henkilo = H.id WHERE pv = ?`
        , [dayDate]);

        return shifts;
    }
    catch(err) {
        console.log(err)
        return false;
    }
    finally {
        await conn?.release();
    }
}

export const addShift = async (data: any) => {
    let conn;
    try {
        conn = await pool.getConnection();
        // const personExists = (await conn.query("SELECT COUNT(*) = 1 AS c FROM henkilo WHERE id=?;", [data.henkilo.id]))[0].c;
        // if(!personExists) throw Error("Viallinen henkilö-id");

        await conn.beginTransaction();
        if(data.source) {
           const deleteSource = await conn.query("DELETE FROM vuoro WHERE id = ?", [data.source.vuoroId]);
        }
        console.log(data.vuoro)
        const newShift = await conn.query("INSERT INTO vuoro(pv, vuoro, aika, henkilo, note) VALUES(?, ?, ?, ?, ?)",
            [
                new Date(data.vuoro.paiva),
                data.vuoro.vuorotyyppi,
                data.vuoro.aika,
                data.henkilo.id,
                null
            ]
        );
        await conn.commit();

        return true;
    }
    catch(err) {
        await conn?.rollback();
        console.log(err)
        return false;
    }
    finally {
        if(conn) conn.release();
    }
}