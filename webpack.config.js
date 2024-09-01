// for development mode

// module.exports = {
//     mode: 'development',
// };




// for production mode

const path = require('path')
const htmlWebPackPlugin = require('html-webpack-plugin');
const { title } = require('process');

module.exports = {
    mode: 'production',
    entry:{
        filename: path.resolve(__dirname,'src/index.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean:true,
    },
    devServer:{
        port:9000,
        compress: true,
        hot: true,
        static:{
            directory: path.join(__dirname,'dist')
        },
    },
    module:{
        rules:[
            {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader'],
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource'

        }
    ],
    },

    performance:{
        hints: false,
        maxAssetSize: 51200,
        maxEntrypointSize: 51200,
    },

    plugins:[
        new htmlWebPackPlugin({
            title: 'My Web Page',
            filename:'index.html',
            tamplate: './src/index.html'
        }),
    ]
};