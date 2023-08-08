<script lang="ts">


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

    addExpItem("Fall 2022", "Coached fellow students in cs classes", "USU");
    addExpItem("Spring 2023", "Frontend and Backend development on Angular, C#, Docker, and Kubernetes Software stack", "SDL");
    addExpItem("Summer 2023", "Developed linux driver, cross platform applications, and raspberry pi kernel modifications", "Biomerics");

</script>
<div class="flex">
<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Dates</th>
				<th>Where</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			{#each expTree as row, i}
				<tr>
					<td>{row.dates}</td>
					<td>{row.where}</td>
					<td>{row.description}</td>
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