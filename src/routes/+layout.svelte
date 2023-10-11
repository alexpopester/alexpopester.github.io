<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import {Ratings, TabAnchor, TabGroup, Table} from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import { AppShell, AppBar, Toast, Drawer, drawerStore, LightSwitch, type DrawerSettings} from '@skeletonlabs/skeleton';
	import {SvelteComponentTyped, onMount} from "svelte"
	import {screenWidth} from "./stores";
	import {visible,words,about,nothing,contact,skills,projects} from "./stores"

	let screenSize : number;
	$: $screenWidth = screenSize;
	
	let href : string = "";
	let box : SvelteComponentTyped 
	let yTop : number | undefined = 0
	let yMax : number | undefined = 0 
	let value = {current: yTop, max: 10}
	function openDrawer() {
		const drawerSettings : DrawerSettings = {
			id: 'drawer',
			bgDrawer: 'bg-slate-300 text-black',
			bgBackdrop: '',
			width: 'w-[280px] md:w-[480px] h-1/4 md:h-1/4',
			padding: 'p-4',
			rounded: 'rounded-xl',
		}
		drawerStore.open(drawerSettings)
	}


	function parseScroll(){
		yTop = document.getElementById("page")?.scrollTop	
		yMax = document.getElementById("page")?.scrollHeight	
		if (yTop && yMax){
			let result = Math.round((yTop * 1.50) / Math.round(yMax / value.max))
			value.current= result
		}
	}

    const fileName : string = "Alex.Pope.Resume.pdf";
    const fileUrl : string = "Alex.Pope.Resume.pdf";

    function openGitHub() {
        const linkUrl = "https://github.com/alexpopester";
		window.location.href = linkUrl;
    }
    function openLinkedIn() {
        const linkUrl = "https://www.linkedin.com/in/alex-pope-b70151224/";
		window.location.href = linkUrl;
    }
    function handleDownload() {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.click();
    }

	onMount(()=>parseScroll());
</script>
<svelte:window bind:innerWidth={screenSize}/>
<Toast position="t"/>
<!-- App Shell -->
<AppShell id="page" bind:this={box} on:scroll={parseScroll}>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">
			<div></div>
		</svelte:fragment>
			<div class="btn-group btn-md variant-filled bg-slate-300">
				<button on:click={openGitHub}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
				</button>
				<button on:click={openLinkedIn}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
				</button>
				<button on:click={handleDownload}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>
				</button>
			</div>
		<svelte:fragment slot="trail">
			<LightSwitch/>
		</svelte:fragment>
	</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot/>

	<svlete:fragment slot="footer">
		<TabGroup
			justify="justify-center"
			active="variant-filled-primary"
			hover="hover:variant-soft-primary"
			flex="flex-1 lg:flex-none"
			rounded=""
			border=""
			class="bg-surface-100-800-token w-full items-center"	
		>
		<TabAnchor on:click={()=>$visible=words} selected={$visible===words}>
			<div class="grid grid-cols-3 gap-4">
				<div class="flex items-center justify-center col-start-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
				</div>
				<div class="flex items-center justify-center col-span-3">
					<span class="">Home</span>
				</div>
			</div>
		</TabAnchor>
		<TabAnchor on:click={()=>$visible=about} selected={$visible===about}>
			<div class="grid grid-cols-3 gap-4">
				<div class="flex items-center justify-center col-start-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>		
				</div>
				<div class="flex items-center justify-center col-span-3">
					<span>About</span>
				</div>
			</div>
		</TabAnchor>
		<TabAnchor on:click={()=>$visible=projects} selected={$visible===projects}>
			<div class="grid grid-cols-3 gap-4">
				<div class="flex items-center justify-center col-start-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"/></svg>
				</div>
				<div class="flex items-center justify-center col-span-3">
					<span>Projects</span>
				</div>
			</div>
		</TabAnchor>
		<TabAnchor on:click={()=>$visible=skills} selected={$visible===skills}>
			<div class="grid grid-cols-3 gap-4">
				<div class="flex items-center justify-center col-start-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"/></svg>
				</div>
				<div class="flex items-center justify-center col-span-3">
					<span>Skills</span>
				</div>
			</div>
		</TabAnchor>
		<TabAnchor on:click={()=>$visible=contact} selected={$visible===contact}>
			<div class="grid grid-cols-3 gap-4">
				<div class="flex items-center justify-center col-start-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
				</div>
				<div class="flex items-center justify-center col-span-3">
					<span>Contact</span>
				</div>
			</div>
		</TabAnchor>
		</TabGroup>	
	</svlete:fragment>
</AppShell>
