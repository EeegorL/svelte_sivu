<script>
    import PeopleList from "../../../components/PeopleList.svelte";
    import ShiftViewer from "../../../components/ShiftViewer.svelte";
</script>

<style>
    main {
        display: flex;
    }
</style>

<main>
    <PeopleList/>
    <div>
        <ShiftViewer/>
        <ShiftViewer/>
        <ShiftViewer/>
        <ShiftViewer/>
        <ShiftViewer/>
        <ShiftViewer/>
        <ShiftViewer/>
    </div>
</main>