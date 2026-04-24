<script>
    import PeopleList from "../../../components/PeopleList.svelte";
    import ShiftViewer from "../../../components/ShiftViewer.svelte";
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

    li {
        list-style: none;
        margin-bottom: 1rem;
    }

</style>

<main>
    <span>
        <PeopleList/>
    </span>
    <ul>
        <li><ShiftViewer/></li>
        <li><ShiftViewer/></li>
        <li><ShiftViewer/></li>
        <li><ShiftViewer/></li>
        <li><ShiftViewer/></li>
        <li><ShiftViewer/></li>
        <li><ShiftViewer/></li>
    </ul>
</main>