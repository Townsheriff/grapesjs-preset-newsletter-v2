const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    library: "grapesjs-preset-newsletter",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader",],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new NodePolyfillPlugin()],
};
