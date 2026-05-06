import { normalizeDate } from "$lib/utils.js";
import { redirect } from "@sveltejs/kit";
import moment from "moment";

export function load({params}) {
    const path = params.slug;
    if(!path) {
        const today = moment();
        const parsed = normalizeDate(`${today.date()}-${today.month()+1}-${today.year()}`).date;
        redirect(303, `/vk/${parsed}`);
    }
}