import { getShifts } from '$lib/server/dbHandler.js';
import { json } from '@sveltejs/kit';
import moment from 'moment';

export const GET = async ({params}) => {
    const slug = params.slug;
    
    const date = moment(slug, "YYYY-MM-DD", true);
    if(!date.isValid()) {
        return json({
            err: "Invalid date parameter"
        });
    }
    const formattedDate = date.format("YYYY-MM-DD");
    
    const dayShifts = await getShifts(formattedDate);

    return json(dayShifts);
}