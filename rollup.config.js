import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    babel({
      presets: ['@babel/preset-react']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve(),
    commonjs(),
    terser()
  ]
};
