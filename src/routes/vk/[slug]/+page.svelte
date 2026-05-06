<script>
    import Calendar from "../../../components/Calendar.svelte";
    import PeopleList from "../../../components/PeopleList.svelte";
    import ShiftViewer from "../../../components/ShiftViewer.svelte";

    const {data} = $props();
</script>

<style>
    main {
        display: flex;
        flex-direction: row;
        padding: 1rem;
    }

    main :first-child {
        margin-right: 1rem;
    }

    ul {
        width: 100%;
        margin-left: 0;
        margin-top: 0;
        padding: 0;
    }

</style>

<main>
    <aside>
        <Calendar/>
        <PeopleList/>
    </aside>
    <ul>
        {#each data.dates as day}
            <ShiftViewer date={day}/>
        {/each}
    </ul>
</main>