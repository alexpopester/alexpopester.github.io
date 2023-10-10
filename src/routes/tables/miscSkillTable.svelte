<script lang="ts">
	import { screenWidth } from "../stores";

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

addMiscSkill("Scrum", "2", "Participated in dailystand ups, code reviews, project progress reports and more");
addMiscSkill("Client relations", "1.5", "Developed frontend of application directly with customer, learned to explain technical ideas in a simple clear format");
addMiscSkill("Spanish", "2", "Practiced speaking with native speakers for 2 years");

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
			{#each MiscSkillTree as row, i}
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