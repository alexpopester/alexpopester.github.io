<script lang="ts">
	import About from "./about.svelte";
	import Experience from "./experience.svelte";
	import Skills from "./skills.svelte";
</script>
<div class="container h-screen mx-auto flex justify-center items-center">
		<div class="flex justify-center flex-col space-x-2">
			<h1 class="h1 text-8xl">
				<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Curious</span>
			</h1>
			<h1 class="h1 text-8xl">
				<span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">Passionate</span>
			</h1>
			<h1 class="h1 text-8xl">
				<span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">Driven</span>
			</h1>
		</div>
</div>
<About/>
<Experience/>
<Skills/>