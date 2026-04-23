<header>
    <a href="/">
        <img alt="Sivuston logo" src="/img/logo.png"/>
    </a>
    <nav>
        <ul>
            <li>
                <a href="/pv/abc"><button>pv</button></a>
            </li>
            <li>
                <a href="/vk/def"><button>vk</button></a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        min-height: 75px;

        background-color: var(--ashGrey);
        padding: 1rem;
        padding-right: 3rem;
        box-shadow: 0 2px 5px var(--dustyOlive);
    }

    li {
        list-style: none;
        display: inline;
    }
    button {
        background-color: var(--dustyOlive);
        color: whitesmoke;
        margin: 0 1rem;
        padding: .2rem 2rem;
        box-shadow: 2px 2px 3px black;
    }
</style>