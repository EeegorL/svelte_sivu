import { redirect } from "@sveltejs/kit";
import { normalizeDate, goToToday } from "$lib/utils";
import moment from "moment";

import { getPeople, getShifts, getShiftTypes } from "$lib/server/dbHandler.js";

export async function load({params, depends}) {
    const path = params.slug;
    
    const parts = path.split("-");
    if(parts.length !== 3) goToToday("pv");

    const date: any = normalizeDate(path);
    if(!date) goToToday("pv"); // invalid date
    if(date.changed) redirect(303, `/pv/${date.date}`);

    const pathDate = moment(date.date, "DD-MM-YYYY", true);
    if(!pathDate.isValid()) goToToday("pv");
    
    const people = await getPeople();
    const shiftTypes = await getShiftTypes();
    const shifts: Array<Shift> = await getShifts(pathDate.format("DD.MM.YYYY"));
    
    depends("data:people", "data:shifts", "data:shiftTypes");
    
    return {
        date: {date: pathDate.format("DD.MM.YYYY"), str: pathDate.format("ddd DD.MM.YYYY").toString()},
        people: people,
        shiftTypes: shiftTypes,
        shifts: shifts
    }
}