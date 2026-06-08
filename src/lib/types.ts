type DragData = {
    henkilo: { 
        id: number,
        nimi: string,
        lyhenne: string
    },
    vuoro: {
        vuorotyyppi: number,
        aika: number,
        paiva: string
    },
    source: {
        vuoroId: number,
        vuorotyyppi: number,
        aika: number,
        paiva: string
    } | null // null jos tulee PersonLististä
}

type Shift = {
    vuoroId: number,
    pv: Date,
    vuorotyyppi: number,
    note: string | null,
    aika: number
    henkiloId: number,
    henkilo: string,
    lyhenne: string
}

type ShiftType = {
    id: number,
    nimi: string,
    nro: number
}