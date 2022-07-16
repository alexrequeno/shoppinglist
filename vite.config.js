import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	ssr: {
		noExternal: [/^@smui(?:-extra)?\//],
	},
	plugins: [sveltekit()]
};

export default config;
