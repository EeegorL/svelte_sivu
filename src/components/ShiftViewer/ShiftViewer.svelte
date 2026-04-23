<script>
    const vuorotyypit = ["Vuorovastaava", "Peukalonpyörittäjä", "Kenraalikuvernööri Nönnönnöö"];
    const ajat = Array.from({length: 20 - 8}, (x, i) => i + 8);
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
                <th>a</th>
                {#each vuorotyypit}
                    <td>_</td>
                {/each}
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    table {
        padding: 1rem;
        background-color: var(--dustyOlive);
    }

    th {
        font-weight: normal;
        padding: .2rem;
    }

    td, th {
        border: 1px solid black;
    }
    
</style>