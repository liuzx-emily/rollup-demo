import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";

export default (commandLineArgs) => {
  const isDev = commandLineArgs.watch;
  const isProd = !isDev;
  let output;
  if (isDev) {
    output = {
      file: "example/bundle.js",
      format: "iife",
      name: "myLib",
      sourcemap: true,
      globals: {
        vue: "Vue",
      },
    };
  } else {
    output = [
      { file: "dist/bundle.es.js", format: "es" },
      {
        file: "dist/bundle.iife.js",
        format: "iife",
        name: "myLib",
        globals: {
          vue: "Vue",
        },
      },
    ];
  }
  return {
    input: "./src/index.js",
    output,
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({ babelHelpers: "bundled" }),
      vue(),
      postcss(),
      isProd && uglify(),
      isDev && serve({ contentBase: "example", port: 8050 }),
      isDev && livereload({ watch: "example" }),
    ],
  };
};
