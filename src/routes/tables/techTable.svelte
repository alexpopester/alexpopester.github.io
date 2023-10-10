<script lang="ts">
	import { screenWidth } from "../stores";

    interface TechExp {
        skill: string;
        years: string;
        description: string
    }

let techExpTree : Array<TechExp> = [];
    
function addtechExp(skill : string, years : string, description : string){
    let techExp : TechExp = {
        skill:skill,
        years:years,
        description:description
    };
    techExpTree.push(techExp);
}

addtechExp("Linux", "2", "Arch and Debian based Linux experience, Customized Linux kernel on a Raspberry Pi");
addtechExp("Docker", "1", "Created Python Docker container that needed to integrate into a C# backend in a Kubernetes cluster, Created docker build for cross platform application");
addtechExp("Extras", "~", "Kubernetes, AWS services, MySQL, Sveltekit, more...");

</script>
<div class="flex">
<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>skill</th>
				{#if $screenWidth > 735}
				<th>description</th>
				{/if}
				<th>Years</th>
			</tr>
		</thead>
		<tbody>
			{#each techExpTree as row, i}
				<tr>
					<td>{row.skill}</td>
					{#if $screenWidth > 735}
					<td>{row.description}</td>
					{/if}
					<td>{row.years}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
</div>