<script lang="ts">
    import {clipboard} from '@skeletonlabs/skeleton'
    const email: string = 'aspope3@gmail.com';
    const phone: string = '801-548-1672';
</script>
<div class="card card-hover mx-12 my-12 max-w-3xl min-w-1/2">
    <header class="card-header" id="Contact">
        <div class="p-4 text-center font-mono text-4xl">
            Contact
        </div>
    </header>
    <section class="p-4 grid grid-cols-10 gap-x-2">
            <div class="p-4 text-center font-mono text-2xl">Email:</div>
            <button class="p-4 col-start-5 text-center font-mono text-xl">{email}</button>
            <button type="button" class="btn-icon col-start-10 variant-ghost-tertiary" use:clipboard={email}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
            </button>

            <div class="p-4 col-start-1 text-center font-mono text-2xl">Phone:</div>
            <button class="p-4 text-center col-start-5 font-mono text-xl">{phone}</button>
            <button type="button" class="btn-icon col-start-10 variant-ghost-tertiary" use:clipboard={phone}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
            </button>
    </section>
</div>
