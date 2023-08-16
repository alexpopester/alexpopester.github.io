<script lang="ts">
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

addtechExp("Python", "2", "Qt Raspberry Pi Auto-Camera Tester, California Earthquake Scientific Visualizations");
addtechExp("Javascript", "1.5", "Sveltekit/Tauri Cross Platform Python Method Creator, Angular Frontend, Vanilla Js Dalle-2 choose your own adventure with AI images, Personal Portfolio Website");
addtechExp("Extras", "~", "C# .Net Backend, Rust Tauri Backend, Android Movie Race Game");

</script>
<div class="flex">
<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>skill</th>
				<th>description</th>
				<th>Years</th>
			</tr>
		</thead>
		<tbody>
			{#each techExpTree as row, i}
				<tr>
					<td>{row.skill}</td>
					<td>{row.description}</td>
					<td>{row.years}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3">That's all folks!</th>
			</tr>
		</tfoot>
	</table>
</div>
</div>