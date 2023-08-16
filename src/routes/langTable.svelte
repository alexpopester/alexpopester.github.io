<script lang="ts">
interface codeLang {
    lang: string;
    years: string;
    projects: string
}

let codeTree : Array<codeLang> = [];
    
function addcodeLang(lang : string, years : string, projects : string){
    let codeLang : codeLang = {
        lang:lang,
        years:years,
        projects:projects
    };
    codeTree.push(codeLang);
}

addcodeLang("Python", "2", "Qt Raspberry Pi Auto-Camera Tester, California Earthquake Scientific Visualizations");
addcodeLang("Javascript", "1.5", "Sveltekit/Tauri Cross Platform Python Method Creator, Angular Frontend, Vanilla Js Dalle-2 choose your own adventure with AI images, Personal Portfolio Website");
addcodeLang("Extras", "~", "C# .Net Backend, Rust Tauri Backend, Android Movie Race Game");

</script>
<div class="flex">
<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Lang</th>
				<th>Projects</th>
				<th>Years</th>
			</tr>
		</thead>
		<tbody>
			{#each codeTree as row, i}
				<tr>
					<td>{row.lang}</td>
					<td>{row.projects}</td>
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