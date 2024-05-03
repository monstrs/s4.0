import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: '../../standalone/entrypoints/standalone-service-entrypoint/schema.graphql',
  documents: ['../../../contexts/**/app/**/**/src/**/*.graphql'],
  emitLegacyCommonJSImports: false,
  generates: {
    './src/sdk.ts': {
      plugins: [
        {
          '@graphql-codegen/add': {
            content: '/* eslint-disable */',
          },
        },
        '@graphql-codegen/typescript',
        '@graphql-codegen/typescript-operations',
        '@graphql-codegen/typescript-graphql-request',
      ],
      config: {
        maybeValue: 'T | undefined',
        useTypeImports: true,
        emitLegacyCommonJSImports: false,
        gqlImport: './graphql-tag.import.js',
        inlineFragmentTypes: 'combine',
      },
    },
  },
}

export default config
