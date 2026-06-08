import { normalizeDate } from "$lib/utils.js";
import { redirect } from "@sveltejs/kit";
import moment from "moment";

export async function load({params}) {
    //@ts-ignore
    const path: any = params.slug;
    if(!path) {
        const today = moment();
        const normalized: any = normalizeDate(`${today.date()}-${today.month()+1}-${today.year()}`);
        const parsed = normalized.date;
        redirect(303, `/pv/${parsed}`);
    }
}