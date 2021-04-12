var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            '@babel/transform-runtime'
          ]
        }
      },
      {
        test: /\.js|.jsx$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(jpg|png|svg|webp)$/,
        loader: "url-loader",
        options: {
          limit: 25000,
        },
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "https://localhost:8080",
    }),
  },
};
