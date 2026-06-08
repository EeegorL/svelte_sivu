import { getShifts } from '$lib/server/dbHandler.js';
import { json } from '@sveltejs/kit';
import moment from 'moment';

export const GET = async ({params}) => {
    const slug = params.slug;
    
    const date = moment(slug, "DD-MM-YYYY", true);
    if(!date.isValid()) {
        return json({
            err: "Invalid date parameter"
        });
    }

    const firstDayOfWeek = date.startOf("week");
    const days = [firstDayOfWeek];

    for(let i = 1; i < 7; i++) {
        days.push(firstDayOfWeek.clone().add(i, "days"));
    }
    
    const data: Record<number, any> = {};
    let i = 0;
    for(let day of days) {
        const daysShifts = await getShifts(day.format("DD-MM-YYYY"));
        data[i] = daysShifts;
        i++;
    }

    return json({});
}