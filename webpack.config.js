module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot/,
        use: 'file-loader'
      },
      {
        test: /\.css$/i,
        use: ['css-loader','style-loader']
      },
      {
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
						},
					},
				],
			},

    ]
  }
}
