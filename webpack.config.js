const path = require("path");

module.exports = {
    entry: [
        pathToIndexJs = require.resolve("./src/js/index.js"),
        
    ],
    output: {
        path: path.resolve(__dirname, "./dist/js"),
    },
    watch: false,
    mode: "development",
    devtool: "source-map",
    resolve: {
      extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.mp3$/i,
                loader: 'file-loader'
              }
            ]
    }
}