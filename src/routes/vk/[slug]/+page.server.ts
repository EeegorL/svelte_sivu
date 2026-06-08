import { redirect } from "@sveltejs/kit";
import { normalizeDate, goToToday } from "$lib/utils.js";
import moment from "moment";
import { getPeople, getShiftTypes } from "$lib/server/dbHandler";

export async function load({params}) {
    const path = params.slug;
    
    const parts = path.split("-");
    if(parts.length !== 3) goToToday("vk");

    const date: any = normalizeDate(path);
    if(!date) goToToday("vk"); // invalid date
    if(date.changed) redirect(303, `/vk/${date.date}`);

    const pathDate = moment(date.date, "DD-MM-YYYY", true);
    if(!pathDate.isValid()) goToToday("vk");
    
    const dates = [];
    const mon = pathDate.clone().startOf("week");
    for(let i = 0; i < 7; i++) {
        dates.push({date: mon.clone().add(i, "days").format("DD.MM.YYYY"), str: mon.clone().add(i, "days").format("ddd DD.MM.YYYY").toString()});
    }
    const people = await getPeople();
    const shiftTypes = await getShiftTypes();

    return {
        date: dates,
        people: people,
        shiftTypes: shiftTypes
    }
}