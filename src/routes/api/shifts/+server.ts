import { json } from "@sveltejs/kit";
import { addShift } from "$lib/server/dbHandler";

export const POST = async ({request}) => {
    const body = await request.json();
    const newShift = await addShift(body);
    
    return json({})
    
}