<script lang="ts">
    interface MiscSkill {
        skill: string;
        years: string;
        description: string
    }

let MiscSkillTree : Array<MiscSkill> = [];
    
function addMiscSkill(skill : string, years : string, description : string){
    let MiscSkill : MiscSkill = {
        skill:skill,
        years:years,
        description:description
    };
    MiscSkillTree.push(MiscSkill);
}

addMiscSkill("Scrum", "2", "Qt Raspberry Pi Auto-Camera Tester, California Earthquake Scientific Visualizations");
addMiscSkill("Customer Relations", "1.5", "Sveltekit/Tauri Cross Platform Python Method Creator, Angular Frontend, Vanilla Js Dalle-2 choose your own adventure with AI images, Personal Portfolio Website");
addMiscSkill("Spanish", "~", "C# .Net Backend, Rust Tauri Backend, Android Movie Race Game");

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
			{#each MiscSkillTree as row, i}
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