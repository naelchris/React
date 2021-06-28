// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//     mode: 'development',
//     entry: [
//         './index.js'
//     ],

//     output: {
//         path: path.resolve(__dirname)
//     }

// }

module.exports = {
    mode: 'development',
    entry: './index.js',
    output:{
        path: __dirname,
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 
                    {
                        loader: 'babel-loader',
                    }
                
            }
        ]
    }
}