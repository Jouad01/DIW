const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/application.js',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
    })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [ // rules es un array de objetos
        {
            test: /\.css$/, // Esta regla procesa archivos CSS
            use: [
              'style-loader', // Cargar estilos en línea en el archivo HTML
              'css-loader'    // Cargar archivos CSS
            ]
            },
            {
                test: /\.s[ac]ss$/i, // Esta regla procesa archivos SASS
                use: [
                'style-loader', // Cargar estilos en línea en el archivo HTML
                'css-loader',   // Cargar archivos CSS
                'sass-loader'   // Compilar archivos SASS a CSS
                ]
            }
            ]
        }
};
