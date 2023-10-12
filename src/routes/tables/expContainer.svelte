<script lang="ts">
	import {screenWidth} from "../stores";

	let elemCarousel: HTMLDivElement;
	let gradient : string[] = [];
	gradient.push("bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500")
	gradient.push("bg-gradient-to-r from-purple-500 to-pink-500")
	gradient.push("bg-gradient-to-r from-green-300 via-blue-500 to-purple-600")

    interface ExpItem {
        dates: string;
        website: string;
        path: string;
        where: string
    }

    let expTree : Array<ExpItem> = [];
        
    function addExpItem(dates : string, path:string, website : string, where : string){
        let expItem : ExpItem = {
            dates:dates,
            path:path,
            website:website,
            where:where
        };
        expTree.push(expItem);
    }

    addExpItem("Summer 2023","biomerics.jpg", "https://biomerics.com/", "Biomerics");
    addExpItem("Spring 2023 - Present","sdl.jpg", "https://www.sdl.usu.edu/", "Space Dynamics Laboratory");
    addExpItem("Fall 2022","usu.jpg", "https://www.usu.edu/", "Utah State University");

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
<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto ml-6">
		{#each expTree as row, i}
		<a href={row.website} class="shrink-0 w-[100%] snap-end content-center">
			<figure class="max-w-lg">
			<img
				class="hover:brightness-75 object-cover rounded-container-token"
				src={row.path}
				alt={row.where}
				loading="lazy"
			/>
				<figcaption class="my-2 text-sm text-center text-gray-500 dark:text-gray-400">{row.where} : {row.dates}</figcaption>
			  </figure>
		</a>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
		<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
	</button>
</div>