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
    const dateFromStr = moment(dateStr, "YYYY-MM-DD", true);
    
    if(!dateFromStr.isValid()) return false;
    return {date: dateStr, changed: fixUrl};
}

export const dateRelation = (_date: string) => {
    const date = moment(_date);
    const today = moment(new Date(Date.now()));

    if(today.clone().isSame(date.clone(), "day")) return "Tänään, ";
    else if(today.clone().add(-1, "days").isSame(date.clone(), "day")) return "Eilen, ";
    else if(today.clone().add(1, "days").isSame(date.clone(), "day")) return "Huomenna, ";
    else return "";
}

export const goToToday = (type: string) => {
    const today = moment();
    const normalized: any = normalizeDate(`${today.year()}-${today.month()+1}-${today.date()}`);

    const parsed: any = normalized.date;
    redirect(303, `/${type}/${parsed}`);
}

