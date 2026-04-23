<div>
    <ul>
    {#each people as p}
        <li><strong>{p.abbr}</strong> {p.name}</li>
    {/each}
    </ul>
</div>

<style>
    div {
        position: relative;
        width: fit-content;
        border: 1px solid black;
        border-radius: 10px 0 0 10px;
        margin-left: 1rem;
        margin-top: 1rem;
    }

    ul {
        display: flex;
        flex-direction: column;

        margin: 0;
        padding: 0;
        gap: .5rem;
        overflow-y: scroll;
        height: 40rem;

        scrollbar-color: var(--ashGrey) var(--darkKhaki);
    }

    li {
        list-style: none;
    }
    li:nth-child(even) {
        background-color: var(--ashGrey);
    }
</style>

<script>
    let people = $state([]);

    const peopleList = [
        { name: "Andersen, Erik", id: "4839201745", abbr: "Erik A." },
        { name: "Johansson, Ingrid", id: "1928473650", abbr: "Ingrid" },
        { name: "Nielsen, Lars", id: "5601948372", abbr: "Lars N." },
        { name: "Olsen, Freja", id: "9375012846", abbr: "Freja" },
        { name: "Virtanen, Mika", id: "2083749156", abbr: "Mika V." },
        { name: "Lund, Astrid", id: "7592031847", abbr: "Astrid L." },
        { name: "Hansen, Bjorn", id: "6483920175", abbr: "Bjorn H." },
        { name: "Karlsen, Signe", id: "9301728456", abbr: "Signe" },
        { name: "Bergström, Elias", id: "3819204756", abbr: "Elias B." },
        { name: "Mikkelsen, Liv", id: "5902381746", abbr: "Liv M." },
        { name: "Eriksson, Johan", id: "2847169035", abbr: "Johan E." },
        { name: "Pettersen, Nora", id: "8173649205", abbr: "Nora P." },
        { name: "Korhonen, Antti", id: "6382910475", abbr: "Antti" },
        { name: "Larsen, Ida", id: "9071542836", abbr: "Ida L." },
        { name: "Johansen, Soren", id: "5649382017", abbr: "Soren J." },
        { name: "Aalto, Elina", id: "2948715630", abbr: "Elina A." },
        { name: "Nyström, Henrik", id: "8304952176", abbr: "Henrik N." },
        { name: "Christensen, Alma", id: "3192846750", abbr: "Alma" },
        { name: "Berg, Tobias", id: "7581209463", abbr: "Tobias B." },
        { name: "Jørgensen, Maja", id: "4062839175", abbr: "Maja J." },
        { name: "Hansson, Filip", id: "9821047365", abbr: "Filip H." },
        { name: "Knudsen, Emma", id: "5719304826", abbr: "Emma K." },
        { name: "Lehtinen, Oskari", id: "3048592176", abbr: "Oskari" },
        { name: "Svensson, Klara", id: "8213940572", abbr: "Klara S." },
        { name: "Eiriksson, Leifur", id: "6402831957", abbr: "Leifur" },
        { name: "Madsen, Thea", id: "3920184756", abbr: "Thea M." },
        { name: "Isaksen, Henrik", id: "7582019463", abbr: "Henrik I." },
        { name: "Olofsson, Linnea", id: "4819375026", abbr: "Linnea O." },
        { name: "Rasmussen, Emil", id: "9203847156", abbr: "Emil R." },
        { name: "Petersen, Sofie", id: "7601843925", abbr: "Sofie P." },
        { name: "Saari, Veera", id: "2038471596", abbr: "Veera" },
        { name: "Kjellberg, Arvid", id: "5392018476", abbr: "Arvid" },
        { name: "Holm, Malin", id: "6842031957", abbr: "Malin H." },
        { name: "Lindström, Viktor", id: "8729310456", abbr: "Viktor L." },
        { name: "Tamm, Salla", id: "1309847256", abbr: "Salla" },
        { name: "Vik, Hanne", id: "9102738465", abbr: "Hanne" },
        { name: "Halldórsson, Jón", id: "5820394716", abbr: "Jón H." },
        { name: "Eklund, Matilda", id: "7810392645", abbr: "Matilda E." },
        { name: "Rautio, Kalle", id: "4701925836", abbr: "Kalle" },
        { name: "Bakken, Mari", id: "1950378462", abbr: "Mari B." },
        { name: "Olesen, Kasper", id: "6392057814", abbr: "Kasper O." },
        { name: "Sandberg, Elise", id: "8730149652", abbr: "Elise S." },
        { name: "Nilsson, Albin", id: "2591738046", abbr: "Albin N." },
        { name: "Torvalds, Leena", id: "9702834156", abbr: "Leena T." },
        { name: "Andersson, Sven", id: "1384205796", abbr: "Sven A." },
        { name: "Johannsdóttir, Brynja", id: "6048391527", abbr: "Brynja J." },
        { name: "Koskinen, Juha", id: "8570139246", abbr: "Juha K." },
        { name: "Bjørnsson, Arnar", id: "7204851936", abbr: "Arnar B." },
        { name: "Pedersen, Camilla", id: "4192837560", abbr: "Camilla P." },
        { name: "Hedlund, Stina", id: "9642017583", abbr: "Stina H." },
        { name: "Lundqvist, Nils", id: "2304951876", abbr: "Nils L." },
        { name: "Andersson, Erik", id: "1142839507", abbr: "Erik An." },
        { name: "Hansen, Erik", id: "2837465910", abbr: "Erik H." },
        { name: "Johansen, Lars", id: "9374156820", abbr: "Lars J." },
        { name: "Olsen, Lars", id: "4159362780", abbr: "Lars O." },
        { name: "Nielsen, Nora", id: "2048597136", abbr: "Nora N." },
        { name: "Karlsen, Nora", id: "9182637405", abbr: "Nora K." },
        { name: "Mikkelsen, Henrik", id: "7583921046", abbr: "Henrik M." },
        { name: "Svensson, Emma", id: "6405829173", abbr: "Emma S." },
        { name: "Olsen, Sofie", id: "3095841726", abbr: "Sofie O." },
        { name: "Berg, Maja", id: "8642039571", abbr: "Maja B." }
    ];
    peopleList.sort((a, b) => {
        return a.abbr > b.abbr ? 1 : -1;
    });
    peopleList.forEach(x => people.push(x));
</script>