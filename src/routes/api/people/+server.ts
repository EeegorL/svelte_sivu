import { getPeople } from '$lib/server/dbHandler.js';
import { json } from '@sveltejs/kit';

export const GET = async () => {
    const dayShifts = await getPeople();
    return json({dayShifts});
}