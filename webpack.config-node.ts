import {Configuration} from 'webpack';
import path from "path";
import webpack = require('webpack');

const config: Configuration = {
  // Notice: important, otherwise it will use browser target
  target: 'node',
  mode: "development",
  entry: './hello.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    // Notice:
    // important, otherwise you will see:
    //   WARNING in ./node_modules/formidable/lib/incoming_form.js
    //   1:43-50 Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
    //    @ ./node_modules/formidable/lib/incoming_form.js
    // and
    //   TypeError: require is not a function
    new webpack.DefinePlugin({
      "global.GENTLY": false
    })
  ]
}

export default config;
