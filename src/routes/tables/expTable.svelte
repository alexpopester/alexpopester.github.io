<script lang="ts">
	import {screenWidth} from "../stores";

	let elemCarousel: HTMLDivElement;
	let gradient : string[] = [];
	gradient.push("bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500")
	gradient.push("bg-gradient-to-r from-purple-500 to-pink-500")
	gradient.push("bg-gradient-to-r from-green-300 via-blue-500 to-purple-600")

    interface ExpItem {
        dates: string;
        description: string;
        where: string
    }

    let expTree : Array<ExpItem> = [];
        
    function addExpItem(dates : string, description : string, where : string){
        let expItem : ExpItem = {
            dates:dates,
            description:description,
            where:where
        };
        expTree.push(expItem);
    }

    addExpItem("Summer 2023", "Developed linux driver, cross platform applications, and raspberry pi kernel modifications", "Biomerics");
    addExpItem("Spring 2023 - Now", "Frontend and Backend development on Angular, C#, Docker, and Kubernetes Software stack", "SDL");
    addExpItem("Fall 2022", "Coached fellow students in cs classes", "USU");

function carouselLeft(): void {
const x =
	elemCarousel.scrollLeft === 0
		? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
		: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
elemCarousel.scroll(x, 0);
}

function carouselRight(): void {
	const x =
		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0 // loop
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
	elemCarousel.scroll(x, 0);
}
function carouselThumbnail(index: number) {
	elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
}
</script>

{#if $screenWidth>=865}
<div class="flex">
<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover text-wrap">
		<thead>
			<tr>
				<th>Dates</th>
				<th>Where</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			{#each expTree as row, i}
				<tr >
					<td>{row.dates}</td>
					<td>{row.where}</td>
					<td class="text-wrap">{row.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
</div>
{/if}
{#if $screenWidth<865}
		{#each expTree as row, i}
			<div class="card card-hover {gradient[i]} h-80 mx-5 my-2">
				<header class="card-header">
					<div class="p-4 text-center font-mono text-3xl">
					{row.where} 
					</div>
					<h5 class="p-4 text-center font-mono text-xl">{row.dates}</h5>
				</header>
				<section class="p-4 gap-x-2">
					<p>{row.description}</p>
				</section>
			</div>
		{/each}
<!--
<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	- Button: Left 
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	Full Description 
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each expTree as row, i}
			<div class="card card-hover {gradient[i]} h-80 mx-5 my-2">
				<header class="card-header">
					<div class="p-4 text-center font-mono text-3xl">
					{row.where} 
					</div>
					<h5 class="p-4 text-center font-mono text-2xl">{row.dates}</h5>
				</header>
				<section class="p-4 gap-x-2">
					<p>{row.description}</p>
				</section>
			</div>
		{/each}
	</div>
</div>
-->
{/if}