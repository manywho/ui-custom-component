const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const NgrockWebpackPlugin = require('ngrock-webpack-plugin');
const flow = require('./package.json').flow;

module.exports = function() {
    const config = {
        entry: "./src/index.tsx",
        output: {
            filename: 'custom-component.js',
            path: path.resolve(__dirname, 'build')
        },
        devtool: 'inline-source-map',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },
        devServer: {
            contentBase: './build'
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    enforce: 'pre',
                    use: [
                        {
                            loader: 'tslint-loader',
                            options: {
                                fix: true
                            }
                        }
                    ]
                },
                { 
                    test: /\.tsx?$/, 
                    loader: "awesome-typescript-loader" 
                },
                { 
                    test: /\.js$/, 
                    enforce: "pre", 
                    loader: "source-map-loader" 
                },
                { 
                    test:/\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                    }) 
                }
            ]
        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },
        plugins: [
            new WriteFilePlugin(),
            new ExtractTextPlugin("custom-component.css"),
            new NgrockWebpackPlugin(),
        ],
    }

    if (!fs.existsSync('./build'))
        fs.mkdirSync('./build');

    let template = fs.readFileSync('./template.html').toString();
    template = template
        .replace('{{tenantId}}', flow.tenantId)
        .replace('{{flowId}}', flow.id)
        .replace('{{flowVersionId}}', flow.versionId)
    fs.writeFileSync('./build/index.html', template);

    return config;
};