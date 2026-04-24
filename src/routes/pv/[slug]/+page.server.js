import { redirect } from "@sveltejs/kit";

import moment from "moment";
import "moment/locale/fi";
moment.locale("fi");

export function load({params}) {
    const path = params.slug;
    const pathDate = moment(path, "DD-M-YYYY", true);

    console.log(pathDate.format("LL").toString())

    if(!pathDate.isValid()) {
        const today = moment();
        const parsed = `${today.date()}-${today.month()+1}-${today.year()}`;
        redirect(303, `/pv/${parsed}`);
    }
    return {
        date: pathDate.format("LL").toString()
    }
}