<script lang="ts">
    import { invalidate } from "$app/navigation";
    import { onMount } from "svelte";
    import {dragState} from "$lib/stores/dragItemState.svelte";
    import Person from "./Person.svelte";

    const props = $props();
    const vuoro = () => props.vuoro;
    const aika = () => props.aika;
    const pv = () => props.pv;
    const vuorot = () => props.shifts;

    const styles =
        (vuoro().nimi.includes("Poissa koko päivän")
            ? "border-right: none;border-bottom: none"
            : "") + 
        (aika() == 19 
            ? "border-bottom: none"
            : "");

    let target: HTMLElement;

    onMount(() => {
        target.ondragover = (e) => e.preventDefault();

        target.ondrop = async () => {
            try {
                const sourceData = dragState.dragData;

                if(!sourceData) return;
                if (!(sourceData.henkilo.id && sourceData.henkilo.nimi && sourceData.henkilo.lyhenne)) return;

                const data = {
                    henkilo: {
                        id: sourceData.henkilo.id,
                        nimi: sourceData.henkilo.nimi,
                        lyhenne: sourceData.henkilo.lyhenne
                    },
                    vuoro: {
                        vuorotyyppi: vuoro().id,
                        aika: aika(),
                        paiva: pv().date
                    },
                    source: sourceData.source
                }

                const newShift = await fetch("/api/shifts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                invalidate("data:shifts");

                
            } catch (err) {
                return;
            }
        };
    });
</script>

<td
    rowspan={vuoro().nimi.includes("Poissa koko päivän") ? 12 : 1}
    style={styles}
    bind:this={target}
    data-time={aika()}
    data-shift={vuoro().id}
    data-pv={pv()}
    tabindex="0"
>
    <div class="vuoroContainer">
        {#each vuorot() as v}
            <Person data={v}/>
        {/each}
    </div>

</td>

<style>
    td {
        border: 1px solid black;        
    }
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    span {
        white-space: wrap;
        background-color: aliceblue;
        border: 1px solid black;
        padding: .1rem;
        margin: .1rem;
    }
</style>
