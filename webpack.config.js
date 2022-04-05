const webpack = require("webpack");
const path = require("path");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const GasPlugin = require("gas-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "app.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new Dotenv({
      safe: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "appsscript.json"),
          to: path.resolve(__dirname, "dist", "appsscript.json"),
        },
      ],
    }),
    new GasPlugin(),
  ],
};
