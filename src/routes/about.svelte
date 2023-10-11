<script lang="ts">
import {screenWidth} from "./stores";
import ExpContainer from "./tables/expContainer.svelte";

</script>
<div class="card card-hover mx-12 max-w-3xl min-w-1/2">
    <header class="card-header" id="About">
        <div class="text-center font-mono text-4xl">
            <div>
            About
            </div>
            {#if $screenWidth < 768}
                <div class="w-full">
                    <img class="shadow rounded max-w-full h-auto align-middle border-none" src="alex.jpg" alt="Alex Pope"/>
                </div>
            {/if}
        </div>
    </header>
    <section class="grid grid-rows-3">
        <div class="md:flex md:flex-row">
        <div class="grid md:grid grid-cols-3 md:grid-cols-3 w-6/6 md:w-5/6 md:gap-x-1 gap-y-0">
            <div class="col-span-3 p-4 md:text-center md:text-md">
            I'm currently a Senior Computer Science Student at Utah State University.
            I love being curious and applying everything I learn from customizing a linux kernel for a specific purpose all the way to creating beautiful frontend applications.
            I enjoy being outdoors camping with my family and taking time to enjoy some well built indie games.
            I'm happy and excited to take on any new challenges that life throws my way!
            </div>
        </div>
        {#if $screenWidth >= 768}
        <div class="w-48">
            <img class="shadow rounded max-w-full h-auto align-middle border-none" src="alex.jpg" alt="Alex Pope"/>
        </div>
        {/if}
        </div>
        <div class="row-span-2 ">
            <div class="font-mono text-center text-2xl">Work Experience</div>
        <ExpContainer/>
        </div>
    </section>
</div>
