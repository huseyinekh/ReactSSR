const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/build",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                target: { browsers: ["last 2 versions"] },
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        include: [/\.global/, /reacstrap/],
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // sass-loader
          { loader: 'sass-loader' }
        ]
      },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
  externals: [webpackNodeExternals()],
};
