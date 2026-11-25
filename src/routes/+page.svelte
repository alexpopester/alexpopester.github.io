<script lang="ts">
	const links = [
		{ label: 'GitHub', href: 'https://github.com/alexpopester' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-pope-b70151224/' },
		{ label: 'Email', href: 'mailto:aspope3@gmail.com' },
		{ label: 'Resume', href: '/resume.pdf' }
	];

	const projects = [
		{
			name: 'Bug Localizer',
			href: 'https://github.com/alexpopester/bug-localizer',
			img: '/img/bug-localizer.png',
			contain: true, // white background behind the chart
			alt: 'Bar charts comparing localization hit rates on SWE-bench Lite',
			blurb:
				'Finds the functions in a Python codebase most likely to need changing for a GitHub issue. I fine-tuned GraphCodeBERT on SWE-bench and plugged its ranking into the Agentless LLM repair pipeline. On SWE-bench Lite, top-5 hit rate rose from 12% to 40% over the Gemini-driven baseline.',
			stack: ['Python', 'PyTorch', 'Transformers', 'LLM APIs']
		},
		{
			name: 'XTCE Editor',
			href: 'https://github.com/alexpopester/xtce-editor',
			img: '/img/xtce-editor.png',
			alt: 'Terminal UI showing a spacecraft packet definition as a tree with a detail panel',
			blurb:
				'A terminal editor and toolkit for XTCE, the standard that describes every packet a spacecraft sends and every command it accepts. It has a round-trip-safe parser, reference and cycle validation, undo/redo, and generates Wireshark dissectors.',
			stack: ['Rust', 'Ratatui', 'quick-xml', 'clap']
		},
		{
			name: 'Linux Camera Driver',
			href: null,
			img: '/img/camera-hat.jpg',
			alt: 'Custom Raspberry Pi HAT used to test medical endoscope cameras',
			blurb:
				'A Linux kernel driver for an in-house medical endoscope camera, adapted from the OV5647 driver using the sensor datasheet. It runs on a custom kernel on a Raspberry Pi 4. A multi-threaded test app drives this HAT and gives assemblers live pass/fail feedback.',
			stack: ['C', 'Linux kernel', 'Python', 'Raspberry Pi']
		}
	];

	const jobs = [
		{
			role: 'Software Engineer',
			org: 'Space Dynamics Laboratory',
			when: '2023 – present',
			points: [
				'Integrate software from multiple vendors into one ground system for satellite missions.',
				'Built 10+ OpenC3 COSMOS plugins for spacecraft command and telemetry, plus file transfer and data processing pipelines.',
				'Run containerized Python services on Kubernetes alongside a C# backend, with ActiveMQ and HTTP messaging.'
			]
		},
		{
			role: 'Software Engineer Intern',
			org: 'Biomerics',
			when: 'Summer 2023',
			points: [
				'Wrote the camera driver and test platform above.',
				'Built a cross-platform app for graphically scripting a pipetting robot (Svelte frontend, Rust backend).'
			]
		},
		{
			role: 'Computer Science Coach',
			org: 'Utah State University',
			when: 'Fall 2022',
			points: ['Tutored 100+ students one-on-one in program design, algorithms, and debugging.']
		}
	];

	const skills = [
		['Languages', 'Python, Rust, C#, C++, Ruby, TypeScript'],
		['Infrastructure', 'Docker, Kubernetes, Helm, AWS, Linux, Postgres, ActiveMQ'],
		['Domain', 'Spacecraft ground systems, OpenC3 COSMOS, XTCE, CCSDS']
	];
</script>

<svelte:head>
	<title>Alex Pope</title>
	<meta
		name="description"
		content="Alex Pope, a software engineer building backend services and ground systems in Python and Rust."
	/>
</svelte:head>

<main>
	<header>
		<h1>Alex Pope</h1>
		<p class="tagline">Software engineer. Backend services and ground systems in Python and Rust.</p>
		<p class="intro">
			I build spacecraft ground software at Space Dynamics Laboratory, and I'm finishing a master's in
			computer science at Utah State. I like systems that are boring in production: well tested,
			observable, and easy to change. I'm looking for a mid-level backend role.
		</p>
		<nav>
			{#each links as l}
				<a href={l.href}>{l.label}</a>
			{/each}
		</nav>
	</header>

	<section>
		<h2>Projects</h2>
		{#each projects as p}
			<article class="project">
				<img src={p.img} alt={p.alt} loading="lazy" class:contain={p.contain} />
				<div>
					<h3>
						{#if p.href}<a href={p.href}>{p.name} ↗</a>{:else}{p.name}{/if}
					</h3>
					<p>{p.blurb}</p>
					<ul class="stack">
						{#each p.stack as s}<li>{s}</li>{/each}
					</ul>
				</div>
			</article>
		{/each}
	</section>

	<section>
		<h2>Experience</h2>
		{#each jobs as j}
			<article class="job">
				<div class="job-head">
					<h3>{j.role} · <span>{j.org}</span></h3>
					<span class="when">{j.when}</span>
				</div>
				<ul>
					{#each j.points as pt}<li>{pt}</li>{/each}
				</ul>
			</article>
		{/each}
	</section>

	<section>
		<h2>Education</h2>
		<div class="job-head">
			<h3>M.S. Computer Science · <span>Utah State University</span></h3>
			<span class="when">2026</span>
		</div>
		<div class="job-head">
			<h3>B.S. Computer Science · <span>Utah State University</span></h3>
			<span class="when">2024</span>
		</div>
	</section>

	<section>
		<h2>Skills</h2>
		<dl>
			{#each skills as [k, v]}
				<dt>{k}</dt>
				<dd>{v}</dd>
			{/each}
		</dl>
	</section>

	<footer>
		<a href="mailto:aspope3@gmail.com">aspope3@gmail.com</a>
	</footer>
</main>

<style>
	:global(:root) {
		--bg: #fbfbfa;
		--fg: #1c1c1e;
		--muted: #6b6b70;
		--line: #e6e6e3;
		--accent: #2f5bd3;
		--chip: #f0f0ee;
		color-scheme: light;
	}
	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--bg: #141416;
			--fg: #ececee;
			--muted: #9a9aa2;
			--line: #2a2a2e;
			--accent: #8aa8ff;
			--chip: #222226;
			color-scheme: dark;
		}
	}
	:global(body) {
		margin: 0;
		background: var(--bg);
		color: var(--fg);
		font: 16px/1.6 Inter, system-ui, sans-serif;
		-webkit-font-smoothing: antialiased;
	}
	main {
		max-width: 46rem;
		margin: 0 auto;
		padding: 4.5rem 1rem 3rem;
	}
	a {
		color: var(--accent);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	h1 {
		font-size: 2.4rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		margin: 0;
	}
	.tagline {
		font-size: 1.15rem;
		color: var(--muted);
		margin: 0.25rem 0 1.25rem;
	}
	.intro {
		margin: 0 0 1.25rem;
	}
	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.25rem;
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 0.9rem;
	}
	section {
		margin-top: 3.5rem;
	}
	h2 {
		font-size: 0.8rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--muted);
		border-bottom: 1px solid var(--line);
		padding-bottom: 0.5rem;
		margin: 0 0 1.5rem;
	}
	h3 {
		font-size: 1.05rem;
		font-weight: 600;
		margin: 0;
	}
	h3 span {
		font-weight: 400;
		color: var(--muted);
	}
	.project {
		display: grid;
		grid-template-columns: 14rem 1fr;
		gap: 1.5rem;
		margin-bottom: 2.5rem;
	}
	.project img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 6px;
		border: 1px solid var(--line);
		background: var(--chip);
	}
	.project img.contain {
		object-fit: contain;
		background: #fff;
	}
	.project p {
		margin: 0.4rem 0 0.75rem;
	}
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.stack li {
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 0.75rem;
		background: var(--chip);
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
	}
	.job {
		margin-bottom: 1.75rem;
	}
	.job-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		margin-bottom: 0.35rem;
	}
	.when {
		color: var(--muted);
		font-size: 0.9rem;
		white-space: nowrap;
	}
	.job ul {
		margin: 0.25rem 0 0;
		padding-left: 1.1rem;
	}
	.job li {
		margin-bottom: 0.2rem;
	}
	dl {
		display: grid;
		grid-template-columns: 8rem 1fr;
		gap: 0.5rem 1rem;
		margin: 0;
	}
	dt {
		color: var(--muted);
	}
	dd {
		margin: 0;
	}
	footer {
		margin-top: 4rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--line);
		font-size: 0.9rem;
	}
	@media (max-width: 640px) {
		main {
			padding-top: 3rem;
		}
		.project {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}
		.job-head {
			flex-direction: column;
			gap: 0;
		}
		dl {
			grid-template-columns: 1fr;
			gap: 0 0;
		}
		dd {
			margin-bottom: 0.6rem;
		}
	}
</style>
