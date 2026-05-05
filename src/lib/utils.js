import { redirect } from "@sveltejs/kit";
import moment from "moment";

export const normalizeDate = (date) => {
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
    console.log(dateFromStr)
    
    if(!dateFromStr.isValid()) return false;
    return {date: dateStr, changed: fixUrl};
}

export const goToToday = (type) => {
    const today = moment();
    const parsed = normalizeDate(`${today.date()}-${today.month()+1}-${today.year()}`).date;
    redirect(303, `/${type}/${parsed}`);
}

