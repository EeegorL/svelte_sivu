<script>
    import PeopleList from "../../../components/PeopleList/PeopleList.svelte";
    import ShiftViewer from "../../../components/ShiftViewer/ShiftViewer.svelte";

    let sidebarShown = $state(true);
</script>

<style>
    main {
        display: flex;
    }
    button {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        align-self: center;
        height: 20rem;
    }
</style>

<main>
    {#if sidebarShown}
        <PeopleList/>
    {/if}
    <button onclick={() => sidebarShown = !sidebarShown}>{sidebarShown ? "Hide tha shi" : "Show tha shi"}</button>
    <ShiftViewer/>
</main>