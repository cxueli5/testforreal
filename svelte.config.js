import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: dev ? '' : '/test-port-gh',
		},
	},
  preprocess: vitePreprocess()
};
export default config;