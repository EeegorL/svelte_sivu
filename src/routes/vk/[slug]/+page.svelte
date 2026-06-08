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

    ul {
        width: 100%;
        margin-left: 0;
        margin-top: 0;
        padding: 0;
    }

</style>

<main>
    <span>
        <PeopleList people={data.people}/>
    </span>
    <ul>
    {#each data.date as date}
        <li><ShiftViewer date={date} shiftTypes={data.shiftTypes}/></li>
     {/each}
    </ul>
</main>