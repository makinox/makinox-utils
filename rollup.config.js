import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-scss';

import packageJson from './package.json';

const config = {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), css({ outputStyle: 'compressed' })],
};

export default config;
