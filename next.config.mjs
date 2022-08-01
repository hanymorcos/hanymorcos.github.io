import { withContentlayer } from 'next-contentlayer'
import withBundleAnalyzer from '@next/bundle-analyzer';
import next from 'next';

const nextconfig= {

  enabled: process.env.ANALYZE === 'true',
  
    // for deployment to github pages
    assetPrefix: '',

    // opt-in to SWC's JavaScript minification instead of Terser
    swcMinify: true,

    webpack: function (config, { isServer }) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })

      config.module.rules.push({
          type: "webassembly/async",
          generator: {
            // important, otherwise it will output into a folder that is not served by next
            filename: (isServer)? './../static/wasm/[modulehash].wasm' : 'static/wasm/[modulehash].wasm'
            
          }
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
      
      config.experiments = { ...config.experiments, asyncWebAssembly: true }

      return config 
    },
  }

export default withContentlayer(withBundleAnalyzer(nextconfig))
