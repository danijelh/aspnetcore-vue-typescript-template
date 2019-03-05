"use strict";

const fs = require('fs')
const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Custom variables
let isProduction = false;
const applicationBasePath = "./VueApp/";

// Plugins
const extractSassPlugin = new ExtractTextPlugin({
    filename: "css/[name]/main.css",
    allChunks: true
});

// We search for app.js or app.ts files inside VueApp/{miniSpaName} folder and make those as entries. Convention over configuration
var appEntryFiles = {}
fs.readdirSync(applicationBasePath).forEach(function (name) {

    let spaEntryPoint = applicationBasePath + name + '/app.ts'

    if (fs.existsSync(spaEntryPoint)) {
      appEntryFiles[name] = spaEntryPoint
    }

    spaEntryPoint = applicationBasePath + name + '/app.js'
    if (fs.existsSync(spaEntryPoint)) {
      appEntryFiles[name] = spaEntryPoint
    }

})

// Add main site.scss file with Bulma(or any other source by choice)
appEntryFiles["vendor"] = [
  path.resolve(__dirname, "VueApp/common/design/site.scss"),
]

module.exports = function (env, argv) {

    if (argv.mode === "production") {
        isProduction = true;
    }

    return {
        entry: appEntryFiles,
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
                "@": path.join(__dirname, applicationBasePath)
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
                /* config.module.rule('vue') */
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
                /* config.module.rule('js') */
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                },
                /* config.module.rule('ts') */
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true
                    }
                },
                /* config.module.rule('sass') */
                {
                    test: /\.scss$/,
                    use: extractSassPlugin.extract({
                        use: [
                            {
                                loader: "css-loader"
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
                /* config.module.rule('css') */
                {
                    test: /\.css$/,
                    loader: "css-loader"
                },
                /* config.module.rule('images') */
                {
                  test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                  use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 4096,
                        fallback: {
                          loader: 'file-loader',
                          options: {
                            name: 'img/[name].[hash:8].[ext]'
                          }
                        }
                      }
                    }
                  ]
                },
                /* config.module.rule('svg') */
                {
                  test: /\.(svg)(\?.*)?$/,
                  use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: 'img/[name].[hash:8].[ext]'
                      }
                    }
                  ]
                },
                /* config.module.rule('media') */
                {
                  test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                  use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 4096,
                        fallback: {
                          loader: 'file-loader',
                          options: {
                            name: 'media/[name].[hash:8].[ext]'
                          }
                        }
                      }
                    }
                  ]
                },
                /* config.module.rule('fonts') */
                {
                  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                  use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 4096,
                        fallback: {
                          loader: 'file-loader',
                          options: {
                            name: 'fonts/[name].[hash:8].[ext]'
                          }
                        }
                      }
                    }
                  ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin("wwwroot/dist", {}),
            extractSassPlugin,
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: true
            }),
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
