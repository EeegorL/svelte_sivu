<div draggable="true" bind:this={target}>
    <strong>{data.lyhenne}</strong> {data.nimi}
</div>

<script lang="ts">
    import { onMount } from "svelte";
    import {dragState} from "$lib/stores/dragItemState.svelte";

    const {data} = $props();
    
    let target: HTMLDivElement;
    let ghostElem: HTMLDivElement;
    const coords = {x: 0, y: 0};

    onMount(() => {
        const dragStartHandler = (e: DragEvent) => {
            dragState.draggedItem = target;

            dragState.dragData = {
                henkilo: data,
                source: null
            }

            if(e.dataTransfer) e.dataTransfer.setDragImage(new Image(), 0, 0);
            
            ghostElem = document.createElement("div");
            ghostElem.classList.add("ghost");
            ghostElem.innerHTML = data.lyhenne;
            dragState.ghost = ghostElem;

            document.body.appendChild(ghostElem);
        }

        const dragOverHandler = (e: DragEvent) => {
            let g = dragState.ghost;
            if(!g) return;

            coords.x = e.pageX;
            coords.y = e.pageY;

            g.style.left = `${coords.x - g.getBoundingClientRect().width / 2}px`;
            g.style.top = `${coords.y - 30}px`;      
        }

        const dragEndHandler = (e: DragEvent) => {
            dragState.ghost = null;
            dragState.draggedItem = null;
            document.body.removeChild(ghostElem);
        }

        target.addEventListener("dragstart", dragStartHandler);
        document.addEventListener("dragover", dragOverHandler);
        target.addEventListener("dragend", dragEndHandler);

        return () => {
            target.removeEventListener("dragstart", dragStartHandler);
            document.removeEventListener("dragover", dragOverHandler);
            target.removeEventListener("dragend", dragEndHandler);
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