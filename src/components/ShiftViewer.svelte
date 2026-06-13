<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import ShiftViewerCell from "./ShiftViewerCell.svelte";
    import moment from "moment";

    const ajat = Array.from({length: 20 - 8}, (x, i) => i + 8);
    const props = $props();

    const shifts = () => props.shifts;
    const shiftTypes = () => props.shiftTypes;
    const date = () => props.date;


    const cellShifts = (aika: number, vuoro: ShiftType) => {
        let s: Array<Shift> = [...shifts()];
        const filtered = s.filter(x => x.aika === aika && x.vuorotyyppi === vuoro.id);

        return filtered;
    }   
    
    
    const nav = (direction: 1 | -1) => {
        const s = page.url.pathname.split("/");
        const type = s[1];
        const dateStr = s[2];

        const moveAmount = (type === "pv" ? 1 : 7) * direction;
        const newDate = moment(dateStr).add(moveAmount, "days").format("YYYY-MM-DD");
        
        goto(`/${type}/${newDate}`);
    }

</script>

<div data-date={date()}>
    <table>
        <thead>
            <tr>
                <th colspan={shiftTypes().length + 1}>
                    <nav>
                        <button onclick={() => nav(-1)}>&lt;---------</button>
                        <p>{date().str}</p>
                        <button onclick={() => nav(1)}>---------&gt;</button>  
                    </nav>
                </th>
            </tr>
            <tr>
                <th></th>
                {#each shiftTypes() as t}
                    <th data-shift={t.id}>{t.nimi}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each ajat as a}
            <tr>
                <th data-time={a}>{a}-{a+1}</th>
                {#each shiftTypes() as v}
                    {#if v.nimi.includes("Poissa koko päivän")}
                        {#if a == ajat[0]}
                            <ShiftViewerCell shifts={cellShifts(a, v)} aika={a} vuoro={v} pv={date()}/>
                        {/if}
                    {:else}
                        <ShiftViewerCell shifts={cellShifts(a, v)} aika={a} vuoro={v} pv={date()}/>
                    {/if}
                {/each}
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    div {
        border-radius: 0 10px 10px 0;
        border: 3px solid black;
        overflow-x: scroll;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        overflow-x: scroll;
    }

    thead {
        background-color: var(--dustyOlive);
        color: whitesmoke;
    }

    th {
        font-weight: normal;
        padding: 0;
        margin: 0;
        height: 3rem;
        width: 7rem;
        font-weight: bold;
    }

    thead tr {
        border: 1px solid black;
    }

    thead tr:first-child nav{
        position: sticky;
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        gap: 100px;
    }

    nav p {
        font-size: x-large;
        margin: 0;
    }

    thead button {
        height: fit-content;
        padding: 10px 50px;
        flex: 1;
        font-size: x-large;
    }

    tbody tr th {
        white-space: nowrap;
    }

    tbody th {
        position: sticky;
        left: 0;
        background-color: var(--dustyOlive);
        color: whitesmoke;
    }

    th p {
        display: inline;
    }

    thead th:not(:last-child) {
        border-right: 1px solid black;
    }
    tbody th:not(:last-child) {
        border-top: 1px solid black;
    }

    tr > th:first-child {
        width: 5rem;
        padding: 0;
    }

    tr:nth-child(odd):not(thead tr) {
        background-color: white;
    }
    
</style>