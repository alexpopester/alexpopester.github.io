<script lang="ts">
    import {clipboard, toastStore, type ToastSettings} from '@skeletonlabs/skeleton'
	import { screenWidth } from './stores';
    const email: string = 'aspope3@gmail.com';
    const phone: string = '801-548-1672';

    function toastDemo(): void {
        const t: ToastSettings = {
            message: "Copied to Clipboard!",
            timeout: 2000
        }
        toastStore.trigger(t);
    }
</script>
<div class="card card-hover mx-12 my-12 max-w-3xl min-w-1/2">
    <header class="card-header" id="Contact">
        <div class="p-4 text-center font-mono text-4xl">
            Contact
        </div>
    </header>
    {#if $screenWidth >= 577}
    <section class="p-4 grid grid-cols-10 gap-x-2">
            <div class="p-4 text-center font-mono text-lg md:text-2xl">Email:</div>
            <button class="p-4 col-start-4 text-tertiary-700 text-center font-mono text-xl" on:click={toastDemo} use:clipboard={email}>{email}</button>
            <button type="button" class="btn-icon col-start-10 variant-ghost-tertiary" on:click={toastDemo} use:clipboard={email}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
            </button>

            <div class="p-4 col-start-1 text-center font-mono text-2xl">Phone:</div>
            <button class="p-4 text-center text-tertiary-700 col-start-4 font-mono text-xl" on:click={toastDemo} use:clipboard={phone}>{phone}</button>
            <button type="button" class="btn-icon col-start-10 variant-ghost-tertiary" on:click={toastDemo} use:clipboard={phone}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
            </button>
    </section>
    {/if}
    {#if $screenWidth < 577}
    <section class="p-4 flex flex-col gap-x-2">
            <div class="p-4 text-center font-mono text-xl">Email:</div>
            <button class="p-4 text-tertiary-700 text-center font-mono text-lg" on:click={toastDemo} use:clipboard={email}>{email}</button>

            <div class="p-4 text-center font-mono text-xl">Phone:</div>
            <button class="p-4 text-center text-tertiary-700 font-mono text-lg" on:click={toastDemo} use:clipboard={email}>{phone}</button>
    </section>
    {/if}
</div>
<!--
            <button type="button" class="btn-icon col-start-9 variant-ghost-tertiary" on:click={toastDemo} use:clipboard={email}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
            </button>
            <button type="button" class="btn-icon col-start-9 variant-ghost-tertiary" on:click={toastDemo} use:clipboard={phone}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
            </button>
-->