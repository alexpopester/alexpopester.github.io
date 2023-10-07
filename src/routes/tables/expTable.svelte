<script lang="ts">
	import {screenWidth} from "../stores";
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
<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
	{#each Array.from({ length: 8 }) as _, i}
		<div class="snap-center shrink-0 card py-20 w-40 h-80 md:w-80 text-center">{i + 1}</div>
	{/each}
</div>
