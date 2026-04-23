<script>
    const vuorotyypit = [
        "Vuorovastaava",
        "Aineistovuoro",
        "Asiakaspalvelu - 3. krs",
        "Puhelinpalvelu",
        "Kokoelmatyöt Kaisa",
        "Digiaspa",
        "Kumpula aspa",
        "Terkko aspa",
        "Viikki aspa",
        "Etätöitä (merkitse nootilla kaikki tunnit)",
        "Poissa",
        "Lomalla, poissa koko päivän"
    ];

    const ajat = Array.from({length: 20 - 8}, (x, i) => i + 8);
    let d = false;
</script>

<div>
    <table>
        <thead>
            <tr>
            <th></th>
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
        margin: 0 1rem;
    }
    
    table {
        width: 100%;
        margin-top: 1rem;
        border: 1px solid black;
        border-radius: 0 10px 10px 0;
        border-collapse: collapse;
    }

    th {
        font-weight: normal;
        padding: 0;
        margin: 0;
    }

    td, th {
        padding: 0;
        height: 3rem;
        width: 7rem;
        border: 1px solid black;
    }

    tr > th:first-child {
        width: 5rem;
        padding: 0;
    }
    
</style>