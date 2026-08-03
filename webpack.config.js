import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default (_, argv) => ({
  mode: argv.mode || "production",

  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve("dist"),
    clean: true,
   publicPath: "./",
  },
  devtool: argv.mode === "production" ? false : "eval-source-map",
  devServer: {
   port: 8080,
   open: true,
   watchFiles: ["./src/index.html"],
  },
  plugins: [
   new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  module: {
   rules: [
     {
       test: /\.css$/,
       use: ["style-loader", "css-loader"],
     },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: "asset/resource",
     },
   ],
  },
});