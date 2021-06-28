module.exports = {
    entry: './index.js',
    output:{
        path: __dirname,
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                test: '/\.jsx?$/',
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }
}