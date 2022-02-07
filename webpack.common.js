 const path = require("path");
 const   HtmlWebpackPlugin = require('html-webpack-plugin');
     module.exports = {
        entry:{
            main:  "./src/index.js",
            vendor:"./src/vendor.js"
          },
     module:{
         rules:[
        {
            loader:"babel-loader",
            test:/\.js$/,
            exclude:path.join(__dirname,"/node_modules")
        },
    {
        test:/\.html$/i,
        use:['html-loader']
    },
    {
        test:/\.(png|svg|gif|jpg|jpeg|)$/i,
         use:{ 
             loader:"file-loader",
             options:{
             name:"[name].[hash].[ext]",
             outputPath:"imgs"
             }
         }
    },
    {
        test:/\.(woff|woff2|oet|ttf|otf|)$/i,
        type:'asset/resource'
    }
         ]
     }, plugins:[
        new HtmlWebpackPlugin({
            template:'./src/template.html'
        }) ],
 }