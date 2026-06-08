<script lang="ts">
    import ShiftViewerCell from "./ShiftViewerCell.svelte";

    const ajat = Array.from({length: 20 - 8}, (x, i) => i + 8);
    const props = $props();
    const shifts = () => props.shifts;
    const cellShifts = (aika: number, vuoro: ShiftType) => {
        let s: Array<Shift> = [...shifts()];
        const filtered = s.filter(x => x.aika === aika && x.vuorotyyppi === vuoro.id);

        return filtered;
    }   
    
</script>

<div data-date={props.date}>
    <table>
        <thead>
            <tr>
            <th>{props.date.str}</th>
            {#each props.shiftTypes as t}
                <th data-shift={t.id}>{t.nimi}</th>
            {/each}
            </tr>
        </thead>
        <tbody>
            {#each ajat as a}
            <tr>
                <th data-time={a}>{a}-{a+1}</th>
                {#each props.shiftTypes as v}
                    {#if v.nimi.includes("Poissa koko päivän")}
                        {#if a == ajat[0]}
                            <ShiftViewerCell shifts={cellShifts(a, v)} aika={a} vuoro={v} pv={props.date}/>
                        {/if}
                    {:else}
                        <ShiftViewerCell shifts={cellShifts(a, v)} aika={a} vuoro={v} pv={props.date}/>
                    {/if}
                {/each}
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    div {
        width: 100%;
        border-radius: 10px;
        border: 1px solid black;
        overflow: hidden !important;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
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