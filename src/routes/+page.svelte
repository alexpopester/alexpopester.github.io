<script lang="ts">
	import About from "./about.svelte";
	import Experience from "./experience.svelte";
	import Skills from "./skills.svelte";
	import Contact from "./contact.svelte";
	import { fade, slide } from "svelte/transition";
	import { onMount } from "svelte";
	import {visible,words,about,nothing,contact,skills,projects} from "./stores"


	onMount(()=>{
		$visible=words;
	});
</script>
{#if $visible===nothing}
<div class="container h-full mx-auto flex justify-center items-center">
</div>
{/if}
{#if $visible===words}
<div class="container h-full mx-auto flex justify-center items-center">
		<div class="flex justify-center flex-col space-x-2">
			<h1 in:fade={{ delay: 250, duration: 2000}} class="h1 text-6xl sm:text-8xl">
				<span  class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Curious</span>
			</h1>
			<h1 in:fade={{ delay: 500, duration: 2000}} class="h1 text-6xl sm:text-8xl">
				<span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">Passionate</span>
			</h1>
			<h1 in:fade={{ delay: 750, duration: 2000}} class="h1 text-6xl sm:text-8xl">
				<span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">Driven</span>
			</h1>
		</div>
</div>
{/if}
{#if $visible===about}
<div class="container h-full mx-auto flex justify-center items-center" in:slide|global>
	<About/>
</div>
{/if}
{#if $visible===projects}
<div class="container h-full mx-auto flex justify-center items-center" in:slide|global>
	<Experience/>
</div>
{/if}
{#if $visible===skills}
<div class="container h-full mx-auto flex justify-center items-center" in:slide|global>
	<Skills/>
</div>
{/if}
{#if $visible===contact}
<div class="container h-full mx-auto flex justify-center items-center" in:slide|global>
	<Contact/>
</div>
{/if}
<!--
<div class="flex flex-wrap justify-center items-center">
</div>
-->