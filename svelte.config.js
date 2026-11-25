import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			// TODO: remove once static/resume.pdf is added
			handleHttpError: ({ path, message }) => {
				if (path === '/resume.pdf') return console.warn(message);
				throw new Error(message);
			}
		}
	}
};
