module.exports = { 
    entry: './main.js',  // obrigatoria, informa qual o arquivo principal,
    output: {
        path: __dirname,    // variavel global que se refere ao diretorio do arquivo webpack.
        filename: 'bundle.js'   // nome do arquivo.
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // regex para buscar por todos os arquivos de extensao js
                exclude: /(node_modules|bower_components)/,   // define que o babel nao utilize nenhum arquivo desta pasta.
                use: {
                    loader: 'babel-loader'  // yarn add babel-loader -D  (verificar dependencia instalada no package.json)
                }
            }
        ]
    } 
};
