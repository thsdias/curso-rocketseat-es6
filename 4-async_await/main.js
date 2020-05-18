// --------------------------------------------------------------------------------
// 1 - Instalar plugin do babel para trabalhar com Async/Await.
//     > yarn add @babel/plugin-transform-async-to-generator -D
//     > yarn add @babel/polyfill -D
// 2 - Incluir plugin '@babel/plugin-transform-async-to-generator' no arquivo .babelrc
// 3 - Incluir plugin '@babel/polyfill' como valor de 'entry' no webpack.config
// 4 - Configurando axios
//     > yarn add axios
// --------------------------------------------------------------------------------

// exemplo de promisse basica.
const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok')  }, 2000);
});

// Utilizando sintaxe then/catch para manipular os resultados da Promisse.
minhaPromisse().then(response => {
    console.log('-- then/catch --');
    console.log(response);
})
.catch(erro => {
    console.log(erro);
});

// Es6+: Sintaxe Async/Awayt.
async function executaPromisse() {
    console.log('-- Async/Await --');
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

// exemplo para mulitiplas chamadas.
/*
minhaPromisse().then(response => { 
    console.log(response);

    minhaPromisse().then(response => { 
        console.log(response);

        minhaPromisse().then(response => { 
            console.log(response);        
        })  
    })
})
.catch(erro => {
    console.log(erro);
});

async function executaPromisse() { 
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}
*/

const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok')  }, 2000);
});


// Arrow function:
const myPromisse = async() => {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
};

//executaPromisse();
myPromisse();


/* 
--------------------------------------------------------------------------------
* Utilizando Axios
-------------------------------------------------------------------------------- 
*/

import axios from 'axios';

class Api {
    static async getUserInfo(userName) {
        try {
            const response = await axios.get(`https://api.github.com/users/${userName}`);

            console.log(response);    
        } catch (error) {
            console.log(`Erro na API: ${error}`);
        }        
    }
}

// Teste sucesso:
Api.getUserInfo('thsdias');

// Teste erro:
Api.getUserInfo('asassaxxxxxxxsaasasasas');
