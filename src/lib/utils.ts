import { redirect } from "@sveltejs/kit";
import moment from "moment";

export const normalizeDate = (date: string) => {
    const parts = date.split("-");
    let fixUrl = false;

    for(let i in parts) {
        const numVal = parseInt(parts[i]);
        if(numVal < 10 && parts[i][0] !== "0") {
            parts[i] = "0" + parts[i];
            fixUrl = true;
        }  
    }

    const dateStr = parts.join("-");
    const dateFromStr = moment(dateStr, "DD-MM-YYYY", true);
    
    if(!dateFromStr.isValid()) return false;
    return {date: dateStr, changed: fixUrl};
}

export const goToToday = (type: string) => {
    const today = moment();
    const normalized: any = normalizeDate(`${today.date()}-${today.month()+1}-${today.year()}`);

    const parsed: any = normalized.date;
    redirect(303, `/${type}/${parsed}`);
}

