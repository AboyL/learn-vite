/* eslint-disable */

let envPlugin = {
  name: 'env',
  setup(build) {
    build.onResolve({ filter: /^env$/ }, args => ({
      path: args.path,
      namespace: 'env-ns',
    }))

    build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => {
      console.log(process.env)
      return {
        contents: JSON.stringify(process.env),
        loader: 'json',
      }
    })
  },
}

require('esbuild').build({
  entryPoints: ['src/plugin1.jsx'],
  bundle: true,
  outfile: 'dist-plugin/out.js',
  // loader: {
  //   '.json': 'json',
  // },
  // 应用插件
  plugins: [envPlugin],
}).catch(() => process.exit(1));
