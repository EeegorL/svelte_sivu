import { redirect } from "@sveltejs/kit";
import { normalizeDate, goToToday, dateRelation } from "$lib/utils.js";
import moment from "moment";
import { getPeople, getShifts, getShiftTypes } from "$lib/server/dbHandler";

export async function load({params, depends}) {
    const path = params.slug;
    
    const parts = path.split("-");
    if(parts.length !== 3) goToToday("vk");

    const date: any = normalizeDate(path);
    if(!date) goToToday("vk"); // invalid date
    if(date.changed) redirect(303, `/vk/${date.date}`);

    const pathDate = moment(date.date, "YYYY-MM-DD", true);
    if(!pathDate.isValid()) goToToday("vk");
    
    const dates = [];
    const mon = pathDate.clone().startOf("week");
    for(let i = 0; i < 7; i++) {
        const thisDate = mon.clone().add(i, "days");

        dates.push({date: thisDate.format("YYYY-MM-DD"), str: dateRelation(thisDate.format("YYYY-MM-DD")) + thisDate.format("ddd DD.MM.YYYY").toString()});
    }
    
    const people = await getPeople();
    const shiftTypes = await getShiftTypes();

    const shifts = [];
    for(let date of dates) {
        const dayShifts: Array<Shift> = await getShifts(date.date);
        shifts.push(dayShifts);
    }

    depends("data:people", "data:shifts", "data:shiftTypes");

    return {
        date: dates,
        people: people,
        shiftTypes: shiftTypes,
        shifts: shifts
    }
}