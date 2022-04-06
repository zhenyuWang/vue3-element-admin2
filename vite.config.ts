import { UserConfigExport, ConfigEnv, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { viteMockServe } from "vite-plugin-mock"
import viteImagemin from "vite-plugin-imagemin"
import compressPlugin from "vite-plugin-compression"

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const plugins = [
    vue(),
    // 配置图片压缩
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      webp: {
        quality: 75,
      },
      mozjpeg: {
        quality: 65,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
          {
            removeEmptyAttrs: false,
          },
        ],
      },
    }),
    // 开启gzip、br压缩
    compressPlugin({
      ext: ".gz",
      algorithm: "gzip",
      deleteOriginFile: true,
    }),
  ]
  const env = loadEnv(mode, process.cwd())
  // 如果当前是测试环境，使用添加mock插件
  if (mode === "development") {
    plugins.push(
      viteMockServe({
        mockPath: "mock",
        localEnabled: command === "serve",
      })
    )
  }
  // 处理使用import.meta.env jest 测试报错问题
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        // 环境变量添加process.env
        ["process.env." + key]: `"${val}"`,
      }
    },
    {}
  )
  return {
    base: "./",
    server: {
      open: true,
      port: 3000,
      host: "0.0.0.0",
      // proxy: {
      //   "/api": {
      //     target: "http://jsonplaceholder.typicode.com",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ""),
      //   },
      // },
    },
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
    plugins,
    build: {
      // 设置最终构建的浏览器兼容目标
      target: "es2015",
      // 构建后是否生成 sourcemap 文件
      sourcemap: false,
      // 指定输出路径（相对于 项目根目录) 默认 dist
      outDir: "./dist",
      // 指定生成静态资源的存放路径（相对于 build.outDir）默认 assets
      assetsDir: "assets",
      // 当设置为 true，构建后将会生成 manifest.json 文件，包含了没有被 hash 的资源文件名和 hash 后版本的映射。可以为一些服务器框架渲染时提供正确的资源引入链接
      manifest: false,
      // 自定义底层的 Rollup 打包配置。这与从 Rollup 配置文件导出的选项相同，并将与 Vite 的内部 Rollup 选项合并
      rollupOptions: {
        output: {
          dir: "dist",
          format: "es",
          // https://rollupjs.org/guide/en/#outputmanualchunks
          manualChunks(id) {
            /*
              处理node_modules包保留包名称 防止组合成 vendor.js 导致 vendor.js过大
              id C:/wzy/development/HSCZ/git/shop-backstage-management-system/node_modules/@vue/devtools-api/lib/esm/env.js => @vue
            */
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString()
            }
          },
        },
      },
      // chunk 大小警告的限制
      chunkSizeWarningLimit: 600,
    },
    define: envWithProcessPrefix,
  }
}
