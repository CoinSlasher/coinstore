 const common = require('./webpack.common');
 const path = require("path");
const {merge} = require("webpack-merge"); 
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerAssetPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common,{  
    mode:"production",
     output:{ 
        filename:"[name].[contenthash].bundle.js",
        path:path.resolve(__dirname,"dist"),
     },
     module:{
        rules:[
           {
               test:/\.css$/i,
               use:[MiniCssExtractPlugin.loader,
                "css-loader"]
           }
       ]
    },
    optimization:{
        minimizer:[new CssMinimizerAssetPlugin(), new TerserPlugin()]
    },
     devtool:false,
     plugins:[ 
         new MiniCssExtractPlugin({
             filename:'[name].[contenthash].css'
         }),
         new CleanWebpackPlugin()
     ]
   });
   