import typescript from '@rollup/plugin-typescript'
import { defineConfig as createConfig } from 'yunzai/rollup'
import { defineConfig } from 'rollup'

const configs = createConfig({
  plugins: [
    typescript({
      compilerOptions: {
        declaration: true,
        removeComments: false, // 确保注释不被移除
        declarationDir: 'lib/types'
      },
      include: ['src/**/*']
    })
  ]
})

const mysConifgs = [
  {
    input: 'src/middleware/message.ts',
    file: 'lib/message.js',
    include: ['src/middleware/message.ts'],
    declaration: false,
    declarationDir: undefined,
    outDir: undefined
  }
].map(item => {
  return {
    input: item.input,
    output: {
      file: item.file,
      format: 'es',
      sourcemap: false,
      banner: '/* eslint-disable */'
    },
    plugins: [
      typescript({
        compilerOptions: {
          declaration: item.declaration,
          declarationDir: item.declarationDir,
          removeComments: false, // 确保注释不被移除
          outDir: item.outDir
        },
        include: item.include,
        exclude: ['node_modules']
      })
    ],
    onwarn: (warning, warn) => {
      if (warning.code === 'UNRESOLVED_IMPORT') return
      warn(warning)
    }
  }
})

export default defineConfig(mysConifgs.concat(configs))
