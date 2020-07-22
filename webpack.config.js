const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* Exporto un objeto de javascript, y le pasos algunos parametos, 
estos parametros son los archivos que tiene que tomar webpack.
El index.js es el archivo que arranca toda la aplicación entonces
le tengo que pasar la dirección de ese archivo para eso utilizo el 
modulo path. Una vez tome ese archivo, el cual estará enlazado con el resto
y al final todo será convertido a una carpeta nueva para codigo
de producción, es decir todo el codigo de desarrollo será convertido a 
codigo de producción.*/

module.exports = {
    //Aca con entry le indico desde donde voy a copiar los archivos
    entry: './src/app/index.js',
    //Luego le indico que lo convierta en la siguiente direccion
    //con el nombre de produccion
    output: {
        path: path.join(__dirname, 'produccion'),
        filename: 'bundle.js'
    },
    //Aca le indico en que puerto quiero tener el servidor de desarrollo
    devServer:{
        port: 3000
    },
    //Aca le indico algunas reglas de webpack. Le indico 
    //que realice un testeo de todos los archivos que terminen con .css
    //esto me sirve para que lea todos los archivos css que tenga el proyecto.
    //Y le indico que para cargar utilice los modulos style-loader y css-loader
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};