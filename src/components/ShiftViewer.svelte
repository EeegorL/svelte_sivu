<script>
    const vuorotyypit = [
        "Vuorovastaava",
        "Aineistovuoro",
        "Kaisa - aspa",
        "Puhelinpalvelu",
        "Kokoelmatyöt Kaisa",
        "Digiaspa",
        "Kumpula aspa",
        "Terkko aspa",
        "Viikki aspa",
        "Etätöitä",
        "Poissa",
        "Lomalla, poissa koko päivän"
    ];
    const ajat = Array.from({length: 20 - 8}, (x, i) => i + 8);

    const props = $props();

</script>

<div>
    <table>
        <thead>
            <tr>
            <th>{props.date}</th>
            {#each vuorotyypit as t}
                <th>{t}</th>
            {/each}
            </tr>
        </thead>
        <tbody>
            {#each ajat as a}
            <tr>
                <th>{a}-{a+1}</th>
                {#each vuorotyypit as v}
                {#if v.includes("Lomalla")}
                    {#if a == ajat[0]}
                        <td rowspan="12"></td>
                    {/if}
                {:else}
                    <td></td> <!--Default-->
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
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        /* background-color: whitesmoke; */
    }

    td, th {
        padding: 0;
        height: 3rem;
        width: 7rem;
    }

    td {
        border: 1px solid black;
    }

    th {
        font-weight: normal;
        padding: 0;
        margin: 0;
    }

    thead th:not(:last-child) {
        border-right: 1px solid black;
    }
    tbody th:not(:last-child) {
        border-top: 1px solid black;
    }
    tbody tr:first-child td:last-child{
        border-right: none;
    }

    tr > th:first-child {
        width: 5rem;
        padding: 0;
    }
    
</style>