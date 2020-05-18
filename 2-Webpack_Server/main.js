
// --------------------------------------------------------------------------------
// 1 - Instalar webpack atraves do yarn
//      > yarn add webpack webpack-cli -D
// 2 - Renomear a chave de Dependencias (ex devDependencies) no arquivo de package.json
//      obs: As dependencias serao utilizadas apenas em ambiente de Desenv.
//           Em producao apenas o arquivo bundle.js será publicado.S
// 3 - Criar arquivo de configuracao do webpack webpack.config.js
// 4 - Configurar webpack.config.js
// 5 - Executar cmd para adicionar webpack de desenvolvimento
//      > yarn add webpack --mode=development -w
// 6 - Atualizar package.json node scripts para executar todos os scripts a partir do webpack.
// 7 - Executar babel loader
//      > yarn add babel-loader@8.0.0-beta.0 -D
// 8 - Executar yarn dev
// --------------------------------------------------------------------------------


// Testa configuracoes index.html.
//import { soma } from './funcoes';
//console.log(soma(5, 7));

//import { soma, subtracao } from './funcoes';
//console.log(soma(5, 7));
//console.log(subtracao(15, 8));

// Export defaul - apenas 1 por aqruivo.
import soma from './soma';
console.log(soma(5, 7));

// Utilizando alias para nome da funcao em export default.
import somaFunction from './soma'; 
console.log(somaFunction(9, 7));

// Utilizando alias para qualquer funcao.
import { soma as sm, subtracao as sub } from './funcoes'; 
console.log(sm(5, 7));
console.log(sub(15, 8));

// Importanto arquivo com funcao default e outras funcoes.
// multiplicacao: funcao default
// soma, subtracao: demais funcoes do arquivo
import multiplicacao, { soma as fnSoma, subtracao} from './funcoes';
console.log(fnSoma(3, 2));
console.log(subtracao(30, 8));
console.log(multiplicacao(2, 7));

// Importanto todas as funcoes do arquivo.

// Opcao 1:
import { somar, subtrair, multiplicar, dividir } from './funcoesII';
console.log(somar(7, 2));
console.log(dividir(4, 1));

// Opcao 2:
import * as funcoes from './funcoesII';
console.log(funcoes.somar(7, 2));
console.log(funcoes.dividir(4, 1));
