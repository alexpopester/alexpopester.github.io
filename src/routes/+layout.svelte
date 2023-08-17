<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import {Ratings} from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import { AppShell, AppBar, Drawer, drawerStore, LightSwitch, type DrawerSettings} from '@skeletonlabs/skeleton';
	import {SvelteComponentTyped, onMount} from "svelte"

	let box : SvelteComponentTyped 
	let yTop = 0
	let value = {current: yTop, max: 10}
	function openDrawer() {
		const drawerSettings : DrawerSettings = {
			id: 'drawer',
			bgDrawer: 'bg-purple-900 text-white',
			bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
			width: 'w-[280px] md:w-[480px]',
			padding: 'p-4',
			rounded: 'rounded-xl',
		}
		drawerStore.open(drawerSettings)
	}


	function parseScroll(){
		yTop = box.scrollTop	
		console.log(box)
	}

	onMount(()=>parseScroll())
</script>

<Drawer>
	<p>Hello Skeleton</p>
</Drawer>
<!-- App Shell -->
<AppShell bind:this={box} on:scroll={parseScroll}>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">
			<button type="button" class="btn-icon variant-glass-surface variant-ringed-secondary" on:click={openDrawer}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
				  </svg>
			</button>
		</svelte:fragment>
			<Ratings bind:value={value.current} max={value.max}>
				<svelte:fragment slot="empty">0</svelte:fragment>
				<svelte:fragment slot="half">-</svelte:fragment>
				<svelte:fragment slot="full">|</svelte:fragment>
			</Ratings>
		<svelte:fragment slot="trail">
			<LightSwitch/>
		</svelte:fragment>
	</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot/>
</AppShell>
