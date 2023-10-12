<script>
import {slide} from "svelte/transition";
import {screenWidth} from "./stores";
const selectionScreen = 0;
const cameraDriver = 1;
const autoTester = 2;
const movieRace = 3;
const earthquake = 4;
const i3News = 5;
const methodCreator = 6;

const Titles = [
    "Projects",
    "Linux Camera Driver",
    "Camera Tester",
    "Movie Race Game",
    "Earthquake Analysis",
    "I3 Cyclic News Bar",
    "Method Creator"
]

let whichProj = selectionScreen;
</script>
<div class="card card-hover mx-12 my-12 max-w-3xl min-w-1/2">
    <header class="card-header" id="Experience">
        <div class="p-4 text-center font-mono text-4xl">
            {Titles[whichProj]}
        </div>
    </header>

    {#if whichProj === selectionScreen}
    <section class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="grid gap-4">
            <span class="chip variant-ghost-warning hover:variant-filled"on:keypress={()=>whichProj=cameraDriver} on:click={()=>whichProj=cameraDriver}>
                    <span>
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"/></svg> 
                    </span>
                    <span>Linux Camera Driver</span>
                </span>
            <span class="chip variant-ghost-error hover:variant-filled" on:click={()=>whichProj=autoTester} on:keypress={()=>whichProj=autoTester}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                    </span>
                    <span>Camera Tester</span>
                </span>
        </div>
        <div class="grid gap-4">
            <span class="chip variant-ghost-tertiary hover:variant-filled" on:click={()=>whichProj=earthquake} on:keypress={()=>whichProj=earthquake}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H326.4L288 448l80.8-67.3c7.8-6.5 7.6-18.6-.4-24.9L250.6 263.2c-14.6-11.5-33.8 7-22.8 22L288 368l-85.5 71.2c-6.1 5-7.5 13.8-3.5 20.5L230.4 512H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V185l52.8 46.4c8 7 12 15 11 24z"/></svg>
                    </span>
                    <span>Earthquake Visualization</span>
                </span>
        </div>
        <div class="grid gap-4">
            <span class="chip variant-ghost-secondary hover:variant-filled" on:click={()=>whichProj=movieRace} on:keypress={()=>whichProj=movieRace}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"/></svg>
                    </span>
                    <span>Movie Race Game</span>
                </span>
            <span class="chip border border-primary-500 bg-primary-400/30 hover:variant-filled" on:click={()=>whichProj=i3News} on:keypress={()=>whichProj=i3News}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"/></svg> 
                    </span>
                    <span>I3 Cyclic News</span>
                </span>
            <span class="chip variant-ghost-success hover:variant-filled" on:click={()=>whichProj=methodCreator} on:keypress={()=>whichProj=methodCreator}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>
                    </span>

                    <span>Method Creator</span>
                </span>
        </div>
    </section>
        {/if}
        {#if whichProj === cameraDriver}
            {#if $screenWidth < 500}
            <section class="h-3/4 grid grid-rows-12 content-center">
            <div class="row-span-4 flex items-center mx-20">
                <img class="shadow rounded max-w-full h-auto border-none" src="camera.jpg" alt="Alex Pope"/>
            </div>
            <div class="row-span-3 p-1 text-center text-md">
                Created a multi-threaded PyQt camera auto-tester application.
                Integrated this application to control gpio pins connected to a HAT for the Raspberry Pi.
                Built application to run customized linux kernel commands to test low level hardware
                functionality of camera and increase each level tests until the camera stream would be displayed.
                Raspberry Pi image was modified to boot into a kiosk mode with the application opening on boot.
            </div>
            <div class="row-span-5 text-center">
                <button type="button" class="row-span-5 mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                    Return
                </button>
            </div>
            </section>
            {/if}
            {#if $screenWidth >= 500}
                <section class="grid grid-cols-3" in:slide>
                <div class="col-span-2 p-4">
                    Developed a Linux camera driver for a proprietary scope camera. 
                    Camera driver was adapted from the OV5647 camera driver.
                    Consulted with camera hardware specifications to correctly implement the driver.
                    Installed the driver onto a Raspberry Pi 4 as well as modified kernel functionality to allow
                    for complete control over camera functionality. 
                </div>
                <div class="w-full p-2">
                    <img class="shadow rounded max-w-full h-auto align-bottom border-none" src="camera.jpg" alt="Pi with Hat"/>
                </div>
                    <button type="button" class="mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                        Return
                    </button>
                </section>
            {/if}
        {/if}
        {#if whichProj === autoTester}
            {#if $screenWidth < 500}
            <section class="h-3/4 grid grid-rows-12 content-center">
            <div class="row-span-4 flex items-center mx-20">
                <img class="shadow rounded max-w-full h-auto border-none" src="rpiHat.jpg" alt="Alex Pope"/>
            </div>
            <div class="row-span-3 p-1 text-center text-md">
                Created a multi-threaded PyQt camera auto-tester application.
                Integrated this application to control gpio pins connected to a HAT for the Raspberry Pi.
                Built application to run customized linux kernel commands to test low level hardware
                functionality of camera and increase each level tests until the camera stream would be displayed.
                Raspberry Pi image was modified to boot into a kiosk mode with the application opening on boot.
            </div>
            <div class="row-span-5 text-center">
                <button type="button" class="row-span-5 mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                    Return
                </button>
            </div>
            </section>
            {/if}
            {#if $screenWidth >= 500}
                <section class="grid grid-cols-3" in:slide>
                <div class="col-span-2 p-4">
                    Created a multi-threaded PyQt camera auto-tester application.
                    Integrated this application to control gpio pins connected to a HAT for the Raspberry Pi.
                    Built application to run customized linux kernel commands to test low level hardware
                    functionality of camera and increase each level tests until the camera stream would be displayed.
                    Raspberry Pi image was modified to boot into a kiosk mode with the application opening on boot.
                </div>
                <div class="w-full p-2">
                    <img class="shadow rounded max-w-full h-auto align-bottom border-none" src="rpiHat.jpg" alt="Pi with Hat"/>
                </div>
                    <button type="button" class="mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                        Return
                    </button>
                </section>
            {/if}
        {/if}
        {#if whichProj === earthquake}
            {#if $screenWidth < 500}
            <section class="h-3/4 grid grid-rows-12 content-center">
            <div class="row-span-4 flex items-center mx-20">
                <img class="shadow rounded max-w-full h-auto border-none" src="earthquake.png" alt="Alex Pope"/>
            </div>
            <div class="row-span-3 p-1 text-center text-md">
            Created scientific visualizations of 800Gb earthquake data set. 
            Used Pyvista, Paraview, Numpy, Pandas, and more to create a compelling visualization answering key questions 
            related to earthquake movement and intensity. 
            Utilized techniques such as slice planes, iso surfaces, and streaklines
            to understand large data set.
            Compiled findings into paper and presented infront of my peers.
            </div>
            <div class="row-span-5 text-center">
                <button type="button" class="row-span-5 mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                    Return
                </button>
            </div>
            </section>
            {/if}
            {#if $screenWidth >= 500}
                <section class="grid grid-cols-3" in:slide>
                <div class="col-span-2 p-4">
            Created scientific visualizations of 800Gb earthquake data set. 
            Used Pyvista, Paraview, Numpy, Pandas, and more to create a compelling visualization answering key questions 
            related to earthquake movement and intensity. 
            Utilized techniques such as slice planes, iso surfaces, and streaklines
            to understand large data set.
            Compiled findings into paper and presented infront of my peers.
                </div>
                <div class="w-full p-2">
                    <img class="shadow rounded max-w-full h-auto align-bottom border-none" src="earthquake.jpg" alt="Pi with Hat"/>
                </div>
                    <button type="button" class="mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                        Return
                    </button>
                </section>
            {/if}
        {/if}
        {#if whichProj === movieRace}
            {#if $screenWidth < 500}
            <section class="h-3/4 grid grid-rows-12 content-center">
            <div class="row-span-4 flex items-center mx-20">
                <img class="shadow rounded max-w-full h-auto border-none" src="movieproj1.png" alt="Alex Pope"/>
            </div>
            <div class="row-span-3 p-1 text-center text-md">
            Developed a speed game on Android trying to connect from one actor/movie to another through all of their connected movies and peers.
            Utilized a free movie API to retrieve both movie and actor information.
            Leveraged the chain of movies and actors to create an internal data structure measuring speed, moves, and history.
            Used internal database to manage the highscores of each level.
            </div>
            <div class="row-span-5 text-center">
                <button type="button" class="row-span-5 mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                    Return
                </button>
            </div>
            </section>
            {/if}
            {#if $screenWidth >= 500}
                <section class="grid grid-cols-3" in:slide>
                <div class="col-span-2 p-4">
            Developed a speed game on Android trying to connect from one actor/movie to another through all of their connected movies and peers.
            Utilized a free movie API to retrieve both movie and actor information.
            Leveraged the chain of movies and actors to create an internal data structure measuring speed, moves, and history.
            Used internal database to manage the highscores of each level.
                </div>
                <div class="w-full p-2">
                    <img class="shadow rounded max-w-full h-auto align-bottom border-none" src="movieproj2.jpg" alt="Pi with Hat"/>
                </div>
                    <button type="button" class="mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                        Return
                    </button>
                </section>
            {/if}
        {/if}
        {#if whichProj === i3News}
            {#if $screenWidth < 500}
            <section class="h-3/4 grid grid-rows-12 content-center">
            <div class="row-span-4 flex items-center mx-12">
                <img class="shadow rounded max-w-full h-auto border-none" src="i3p2.png" alt="Alex Pope"/>
            </div>
            <div class="row-span-3 p-1 text-center text-md">
            Was not satisfied with the I3 bar options availble out of the box 
            and wanted easy news source.
            Developed I3Bar script that uses the HackerNews API to retrieve the top 50 most popular articles at the time.
            Created a queue written to a file to store those news articles and pop off a new article every 20 seconds to display on the bar.
            Implemented bash script to read from the article most recently popped off and provide a clickable link from my
            desktop if I wish to read the article.
            </div>
            <div class="row-span-5 text-center">
                <button type="button" class="row-span-5 mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                    Return
                </button>
            </div>
            </section>
            {/if}
            {#if $screenWidth >= 500}
                <section class="grid grid-cols-3" in:slide>
                <div class="col-span-2 p-4">
            Was not satisfied with the I3 bar options availble out of the box 
            and was looking for a better way to stay productive but still read the interesting articles available about tech.
            Developed I3Bar script that uses the HackerNews API to retrieve the top 50 most popular articles at the time.
            Created a queue written to a file to store those news articles and pop off a new article every 20 seconds to display on the bar.
            Implemented simple bash script to read from the article most recently popped off and provide a clickable link from my
            desktop if I wish to read the article.
                </div>
                <div class="w-full p-2">
                    <img class="shadow rounded max-w-full h-auto align-bottom border-none" src="i3.jpg" alt="Pi with Hat"/>
                </div>
                    <button type="button" class="mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                        Return
                    </button>
                </section>
            {/if}
        {/if}
        {#if whichProj === methodCreator}
            {#if $screenWidth < 500}
            <section class="h-3/4 grid grid-rows-12 content-center">
            <div class="row-span-4 flex items-center mx-10">
                <img class="shadow rounded max-w-full h-auto border-none" src="crossapplicationproj2.png" alt="Alex Pope"/>
            </div>
            <div class="row-span-3 p-1 text-center text-md">
            Developed cross platform application to write gui made Python code then to be sent and 
            run on a seperate machine. Used the Tauri framework to develop a frontend written in Javascript using Sveltekit and a 
            backend written in Rust. Created dynamic and professional ui with directly customer and leveraged
            Tauri messaging to communicate to the backend and write the Python scripts.
            </div>
            <div class="row-span-5 text-center">
                <button type="button" class="row-span-5 mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                    Return
                </button>
            </div>
            </section>
            {/if}
            {#if $screenWidth >= 500}
                <section class="grid grid-cols-3" in:slide>
                <div class="col-span-2 p-4">
            Developed cross platform application to write gui made Python code then to be sent and 
            run on a seperate machine. Used the Tauri framework to develop a frontend written in Javascript using Sveltekit and a 
            backend written in Rust. Created dynamic and professional ui with directly customer and leveraged
            Tauri messaging to communicate to the backend and write the Python scripts.
            Built application on Windows, Ubuntu, Raspberry Pi OS, and Arch Linux.
                </div>
                <div class="w-full p-2">
                    <img class="shadow rounded max-w-full h-auto align-bottom border-none" src="crossapplicationproj1.png" alt="Pi with Hat"/>
                </div>
                    <button type="button" class="mb-2 col-start-2 btn variant-glass-primary" on:click={()=>whichProj=0}> 
                        Return
                    </button>
                </section>
            {/if}
        {/if}
</div>
