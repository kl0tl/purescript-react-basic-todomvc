import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import purs from 'rollup-plugin-purs';
import replace from 'rollup-plugin-replace';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    alias({
      entries: [
        { find: 'react', replacement: 'es-react/react' },
        { find: 'react-dom', replacement: 'es-react/react-dom' },
      ]
    }),
    babel({
      presets: ['@babel/preset-react']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    purs({
      buildDir: 'dce-output',
      runMain: false
    }),
    resolve(),
    commonjs({
      namedExports: {
        'dce-output/Data.Nullable/foreign.js': ['null']
      }
    }),
    terser()
  ]
};
