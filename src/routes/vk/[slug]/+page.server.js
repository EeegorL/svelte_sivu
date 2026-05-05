import { redirect } from "@sveltejs/kit";
import { normalizeDate, goToToday } from "$lib/utils.js";
import moment from "moment";

export function load({params}) {
    const path = params.slug;
    
    const parts = path.split("-");
    if(parts.length !== 3) goToToday("vk");

    const date = normalizeDate(path);
    if(!date) goToToday("vk"); // invalid date
    if(date.changed) redirect(303, `/vk/${date.date}`);

    const pathDate = moment(date.date, "DD-MM-YYYY", true);
    if(!pathDate.isValid()) goToToday("vk");
    
    return {
        date: pathDate.format("LL").toString()
    }
}