module.exports = {
  context: __dirname + "/src",
  entry: {
    app: "./js/app"
  },
  output: {
    path: __dirname + "/public/assets",
    filename: "[name].js"
  },
  resolve: {
    root: __dirname + "/src/js",
    modulesDirectories: ["node_modules", "bower_components"],
    extensions: ["", ".js", ".jsx"]
  },
  devtool: "#inline-source-map",
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: "eslint-loader", exclude: [/node_modules/, /theme\/(assets|js)/] }
    ],
    loaders: [
      { test: /\.jsx?$/,  loader: "babel-loader", exclude: [/node_modules/, /theme\/(assets|js)/] }
    ]
  }
};
