import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

/** @type {import('rollup').RollupOptions} */
const config = {
	input: {
		serverless: 'src/serverless.js',
		shims: 'src/shims.js',
		scheduler: 'src/scheduler.js'
	},
	output: {
		dir: 'files/esm',
		format: 'esm'
	},
	plugins: [nodeResolve({ preferBuiltins: true }), commonjs(), json()],
	external: (id) => id === '0SERVER' || id.startsWith('node:') || id === '@netlify/functions',
	preserveEntrySignatures: 'exports-only'
};

export default config;
