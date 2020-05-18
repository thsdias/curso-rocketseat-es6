
// ------------------------------------------------------------------------------------------------------------------------------
// 1 - Pasta src contem todos os arquivos js da aplicacao (arquivos que o webpack precisa monitorar as mudancas).
// 2 - Pasta public contem todos os arquivos que nao sao utilizados diretamente pelo webpack
// 3 - Instalar dev server
//      > yarn add webpack-dev-server -D
// 4 - Adicionar novo item de configuracao (devServer) no arquivo webpack.config.js
// 5 - Alterar item de scripts (valor contido em 'dev') no arquivo package.jso
// 6 - Executar yarn dev 
//  6.1 - Recuperar URL onde o projeto esta sendo executado
// 
// Obs: webpack dev server embute o arquivo bundle.js sem criar o arquivo fisico
//      Para a etapa de implantacao em versao de producao criar um comando ex 'build' no item de scripts 
//      do arquivo package.json e executar o cmd anteriormente criado no terminal
//      > yarn build
//      O arquivo de bundle.js é criado
// Atraves do webpack-dev-server os arquivos sao monitorados e quaisquer alteracoes sao refletidas, como por 
// exemplo atualizacao de paginas (por atualizacao de algum metodo, etc) sem a necesidade de realizar o 'refresh' na mesma
// ------------------------------------------------------------------------------------------------------------------------------

alert('testes');
