"use strict";

const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Custom variables
let isProduction = false;
const applicationBasePath = "VueApp";

// Plugins
const extractSassPlugin = new ExtractTextPlugin({
    filename: "css/[name]/main.css",
    allChunks: true
});

module.exports = function (env, argv) {

    if (argv.mode === "production") {
        isProduction = true;
    }

    return {
        entry: {
            template: path.resolve(__dirname, applicationBasePath + "/template/app.ts"),
            iceandfire: path.resolve(__dirname, applicationBasePath + "/iceandfire/app.ts"),
            idontneedtypescript: path.resolve(__dirname, applicationBasePath + "/idontneedtypescript/app.js"),
            vendor: [

                path.resolve(__dirname, "VueApp/common/design/site.scss"),

            ]
        },
        output: {
            path: path.resolve(__dirname, "wwwroot/dist"),
            filename: "js/[name]/bundle.js",
            chunkFilename: "js/[name]/bundle.js?v=[chunkhash]",
            publicPath: "/dist/"
        },
        resolve: {
            extensions: [".ts", ".js", ".vue", ".json", "scss", "css"],
            alias: {
                vue$: "vue/dist/vue.esm.js",
                "@": path.join(__dirname, "./" + applicationBasePath + "/")
            }
        },
        devtool: "source-map",
        devServer: {
            historyApiFallback: true,
            noInfo: true,
            overlay: true
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                    options: {
                        preserveWhitespace: false,
                        loaders: {
                            scss: "vue-style-loader!css-loader!sass-loader", // <style lang="scss">
                            sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax" // <style lang="sass">
                        }
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true
                    }
                },
                {
                    test: /\.scss$/,
                    use: extractSassPlugin.extract({
                        use: [
                            {
                                loader: "css-loader",
                                options: { minimize: isProduction, sourceMap: true }
                            },
                            {
                                loader: "resolve-url-loader"
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: true,
                                    sourceMapContents: true
                                }
                            }
                        ],
                        fallback: "style-loader"
                    })
                },
                {
                    test: /\.css$/,
                    loader: "css-loader"
                },
                {
                    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "css/",
                                publicPath: "/dist/"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin("wwwroot/dist", {}),
            extractSassPlugin,
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: isProduction ? '"production"' : '""'
                }
            }),
            new webpack.ProvidePlugin({
                Promise: "es6-promise-promise",
                Vue: ["vue/dist/vue.esm.js", "default"]
            }),
            new CompressionPlugin({
                test: /\.js$|\.css$|\.html$/,
                filename: "[path].gz[query]",
                algorithm: "gzip"
            })
        ]
    };
};
