<div draggable="true" bind:this={target}>
    <strong>{data.lyhenne}</strong> {data.nimi}
</div>

<script lang="ts">
    import { onMount } from "svelte";

    const {data} = $props();
    
    let target: HTMLDivElement;
    let dataTransfer;
    let ghost: HTMLDivElement;
    const coords = {x: 0, y: 0};

    onMount(() => {
        target.ondragstart = (e) => {
            dataTransfer = e.dataTransfer;
            
            let henkiloData = {
                henkilo: data,
                source: null
            }
            
            // @ts-ignore aina on dataTransfer
            dataTransfer.setData("text/json", JSON.stringify(henkiloData));

            // @ts-ignore aina on dataTransfer
            dataTransfer.setDragImage(new Image(), 0, 0);
            
            ghost = document.createElement("div");
            ghost.classList.add("ghost");
            ghost.innerHTML = data.lyhenne;

            document.body.appendChild(ghost);
        }

        target.ondrag = (e) => {
            coords.x = e.pageX;
            coords.y = e.pageY;

            ghost.style.left = `${coords.x - ghost.getBoundingClientRect().width / 2}px`;
            ghost.style.top = `${coords.y - 30}px`;
        }

        target.ondragend = () => {
            document.body.removeChild(ghost);
        }
    });
</script>

<style>
    :global(.ghost) {
        pointer-events: none;
        position: absolute;
        border: 1px dotted black;
        background-color: whitesmoke;
        padding: .2rem;
    }
    
    div {
        padding: .2rem 0;
    }

    div:hover {
        cursor: grab;
        background-color: var(--dustyOlive);
    }
</style>