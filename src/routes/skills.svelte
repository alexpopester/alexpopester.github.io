<script lang='ts'>
    import { Avatar } from "@skeletonlabs/skeleton";
    import {Accordion, AccordionItem} from '@skeletonlabs/skeleton';
    import LangTable from "./langTable.svelte";
    import TechTable from "./techTable.svelte";
</script>
<div class="card card-hover mx-12 my-1">
    <header class="card-header">
        <div class="p-4 text-center font-mono text-4xl">
            Skills
        </div>
    </header>
    <section class="p-4 flex flex-row gap-x-2">
        <Accordion>
            <AccordionItem>
                <svelte:fragment slot="lead">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                </svelte:fragment>
                <svelte:fragment slot="summary">Languages</svelte:fragment>
                <svelte:fragment slot="content">
                <LangTable/> 
                </svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="lead">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                </svelte:fragment>
                <svelte:fragment slot="summary">Technology</svelte:fragment>
                <svelte:fragment slot="content">
                <TechTable/> 
                </svelte:fragment>
            </AccordionItem>
        </Accordion>

        <Avatar src="" width="w-32" rounded="rounded-3xl" />
    </section>
    <footer class="card-footer content-center">
        <div class="card variant-ghost-surface text-center w-1/5 ">Cool</div>
    </footer>
</div>
