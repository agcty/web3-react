import esbuild from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

const watch = process.argv.includes('--watch')

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    outdir: 'dist/esm',
    bundle: true,
    sourcemap: true,
    // let cdns or other bundlers handle minification
    minify: false,
    splitting: true,
    format: 'esm',
    target: 'esnext',
    watch,
    plugins: [nodeExternalsPlugin()],
  })
  .catch(console.error)

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    outdir: 'dist/cjs',
    bundle: true,
    sourcemap: true,
    // let cdns or other bundlers handle minification
    minify: false,
    format: 'cjs',
    target: 'esnext',
    watch,
    plugins: [nodeExternalsPlugin()],
  })
  .catch(console.error)
