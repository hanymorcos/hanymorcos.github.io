import { withContentlayer }  from 'next-contentlayer'
import withBundleAnalyzer from '@next/bundle-analyzer'

import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'

import fauxRemarkEmbedder from '@remark-embedder/core'
import fauxOembedTransformer from '@remark-embedder/transformer-oembed'
const remarkEmbedder = fauxRemarkEmbedder.default
const oembedTransformer = fauxOembedTransformer.default

export default withContentlayer()(
  withBundleAnalyzer({

  enabled: process.env.ANALYZE === 'true',
    // for deployment to github pages
    assetPrefix: '',

    // opt-in to SWC's JavaScript minification instead of Terser
    swcMinify: true,

    webpack: function (config, { isServer }) {
      config.module.rules.push({
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
            options: {
              rehypePlugins: [rehypeExternalLinks],
              remarkPlugins: [
                remarkGfm,
                remarkFrontmatter,
                [remarkEmbedder, { transformers: [oembedTransformer] }]
              ]
            }
          }
        ]
      })

      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })

      // wasm support workaround
      // https://github.com/vercel/next.js/issues/25852
      if (isServer) {
        config.output.webassemblyModuleFilename =
          './../static/wasm/[modulehash].wasm'
      } else {
        config.output.webassemblyModuleFilename =
          'static/wasm/[modulehash].wasm'
      }

      // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
      config.experiments = { ...config.experiments, asyncWebAssembly: true }

      return config
    },
  })
)
