<script lang='ts'>
    import { Avatar } from "@skeletonlabs/skeleton";
    import {Accordion, AccordionItem} from '@skeletonlabs/skeleton';
    import LangTable from "./tables/langTable.svelte";
    import TechTable from "./tables/techTable.svelte";
    import MiscSkillTable from "./tables/miscSkillTable.svelte";
</script>
<div class="card card-hover mx-12 my-12 max-w-3xl min-w-1/2">
    <header class="card-header" id="Skills">
        <div class="p-4 text-center font-mono text-4xl">
            Skills
        </div>
    </header>
    <section class="p-4 flex flex-row gap-x-2">
        <Accordion autocollapse>
            <AccordionItem open>
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
            <AccordionItem>
                <svelte:fragment slot="lead">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>
                </svelte:fragment>
                <svelte:fragment slot="summary">Soft Skills</svelte:fragment>
                <svelte:fragment slot="content">
                <MiscSkillTable/> 
                </svelte:fragment>
            </AccordionItem>
        </Accordion>
        <!--
        <Avatar src="" width="w-32" rounded="rounded-3xl" />
        -->
    </section>
</div>
