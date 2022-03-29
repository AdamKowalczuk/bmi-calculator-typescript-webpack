const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  //   debug: true,
  mode: "development",
  devtool: "inline-source-map",
  //   errorDetails: true,
  //   entry: path.resolve(__dirname, "./src/index.tsx"),
  //   entry: {
  //     app: path.join(__dirname, "src", "index.tsx"),
  //   },
  entry: "./src/index.tsx",
  target: "web",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        // options: { allowTsInNodeModules: true },

        // exclude: "/node_modules/",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new WebpackManifestPlugin("./public/manifest.json"),
    new FaviconsWebpackPlugin("./public/favicon.ico"),
  ],
};
