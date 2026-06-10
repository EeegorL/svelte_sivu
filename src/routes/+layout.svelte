<script lang="ts">
	import moment from "moment";
	// @ts-ignore
	import "moment/locale/fi";
	moment.locale("fi");

    import Footer from '../components/Footer.svelte';
    import Header from '../components/Header.svelte';

	let { children } = $props();

	
</script>

<style>
	@import "/globals.css";
	div {
		flex: 1;
		width: 100vw;
	}
</style>

<Header/>
<div>
	{@render children()}
</div>
<Footer/>