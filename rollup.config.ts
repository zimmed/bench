import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';

const rollup = (name) => ({
  input: name === 'bench' ? `src/index.ts` : `src/${name}/index.ts`,
  output: [
    name === 'web'
      ? { file: `dist/${name}.umd.js`, name: 'Bench', format: 'umd', sourcemap: 'inline' }
      : null,
    {
      file: `dist/${name}.js`,
      format: 'es',
      sourcemap: 'inline',
    },
  ].filter(Boolean),
  external: [],
  watch: { include: 'src/**' },
  plugins: [
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
});

export default [rollup('node'), rollup('web'), rollup('bench')];
