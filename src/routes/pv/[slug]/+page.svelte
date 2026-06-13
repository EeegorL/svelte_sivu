<script lang="ts">
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

    .shiftViewerContainer {
        width: 100%;
        margin-left: 0;
        padding: 0;
        min-width: 0;
    }

</style>

<main>
    <div>
        <PeopleList people={data.people}/>
    </div>
    <div class="shiftViewerContainer">
        <ShiftViewer date={data.date} shifts={data.shifts} shiftTypes={data.shiftTypes}/>
    </div>
</main>