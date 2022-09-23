// const path = require('path');

// module.exports = {
//     mode: 'development',
//     entry: './src/index.js',
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     mode: 'development',
//     module: {
//         rules: [
//             {
//                 test: /\.(png|jpe?g|gif)$/i,
//                 use: [{ loader: 'file-loader', },],
//             },
//         ],
//     },
// }


const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                // test: /\.css$/,
                exclude: /node_modules/,
                test: /\.(png|jpe?g|gif)$/i,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }],
            },
        ],
    },
};

