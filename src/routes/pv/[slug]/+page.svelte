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
    }

</style>

<main>
    <span>
        <PeopleList people={data.people}/>
    </span>
    <span class="shiftViewerContainer">
        <ShiftViewer shifts={data.shifts} date={data.date} shiftTypes={data.shiftTypes}/>
    </span>
</main>