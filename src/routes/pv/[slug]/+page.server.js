import { redirect } from "@sveltejs/kit";
import { normalizeDate, goToToday, viikonpaivaLyhenne } from "$lib/utils.js";
import moment from "moment";

export function load({params}) {
    const path = params.slug;
    
    const parts = path.split("-");
    if(parts.length !== 3) goToToday("pv");

    const date = normalizeDate(path);
    if(!date) goToToday("pv"); // invalid date
    if(date.changed) redirect(303, `/pv/${date.date}`);

    const pathDate = moment(date.date, "DD-MM-YYYY", true);
    if(!pathDate.isValid()) goToToday("pv");

    const startOfMonth = moment(pathDate).startOf("month");
    return {
        testi: "abc",
        monthStart: JSON.stringify(startOfMonth),
        date: viikonpaivaLyhenne(pathDate) + " " + pathDate.format("LL").toString()
    }
}