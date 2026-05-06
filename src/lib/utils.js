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
    
    if(!dateFromStr.isValid()) return false;
    return {date: dateStr, changed: fixUrl};
}

export const goToToday = (type) => {
    const today = moment();
    const parsed = normalizeDate(`${today.date()}-${today.month()+1}-${today.year()}`).date;
    redirect(303, `/${type}/${parsed}`);
}

export const viikonpaivaLyhenne = (date) => {
    switch(date.day()) {
        case 1: return "ma";
        case 2: return "ti";
        case 3: return "ke";
        case 4: return "to";
        case 5: return "pe";
        case 6: return "la";
        case 0: return "su";
    }
} 