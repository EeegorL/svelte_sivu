import { redirect } from "@sveltejs/kit";
import { normalizeDate, goToToday, viikonpaivaLyhenne } from "$lib/utils.js";
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
    
    const startOfWeek = moment(pathDate).startOf("week");
    const days = [];
    for(let i = 0; i < 7; i++) {
        const thisDay = startOfWeek.clone().add(i, "days");
        days.push(viikonpaivaLyhenne(thisDay) + " " + thisDay.format("LL").toString());
    }
    const startOfMonth = moment(pathDate).startOf("month");

    return {
        monthStart: "startOfMonth",
        dates: days
    }

}