<script>
	import moment from "moment";
	import "moment/locale/fi";

    import Footer from '../components/Footer.svelte';
    import Header from '../components/Header.svelte';

	let { children } = $props();

	
</script>

<style>
	@import "/globals.css";
	div {
		flex: 1;
	}
</style>

<Header/>
<div>
	{@render children()}
</div>
<Footer/>