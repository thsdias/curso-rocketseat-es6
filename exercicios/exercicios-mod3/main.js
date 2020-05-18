// --------------------------------------------------------------------------------
// Exercícios: Módulo 03
// Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o
// babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.
// --------------------------------------------------------------------------------

// Transforme os seguintes trechos de código utilizando async/await:

/*
    // Funão delay aciona o .then após 1s
    const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
    function umPorSegundo() {
        delay().then(() => {
            console.log('1s');        
            delay().then(() => {
                console.log('2s');        
                delay().then(() => {
                    console.log('3s');
                });
            })
        });
    }
    umPorSegundo();
*/

const delay = () => new Promise((resolve) => setTimeout(() => { resolve('Delay') }, 1000));

const umPorSegundo = async() => {     
    console.log(await delay());
    console.log('1s');
    console.log(await delay());
    console.log('2s');
    console.log(await delay());
    console.log('3s');
}

umPorSegundo();


/*
    import axios from 'axios';
    function getUserFromGithub(user) {
        axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
    }
    getUserFromGithub('diego3g');
    getUserFromGithub('diego3g124123');
*/

import axios from 'axios';
const getUserFromGithub = async(user) => { 
    try {
        const resp = await axios.get(`https://api.github.com/users/${user}`);
        console.log(resp.data);
    } catch (error) { 
        console.log('Usuário não existe');
    }    
};

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


/* 
    class Github {
        static getRepositories(repo) {
            axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
        }
    }
    Github.getRepositories('rocketseat/rocketseat.com.br');
    Github.getRepositories('rocketseat/dslkvmskv');
*/

class Github { 
    static async getRepositories(repo) {
        try {
            const resp = await axios.get(`https://api.github.com/repos/${repo}`);   
            console.log(resp.data);
        } catch (error) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
Github.getRepositories('thsdias/livro-json_basico');


/*
    const buscaUsuario = usuario => {
        axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
    }
    buscaUsuario('diego3g');
*/ 

const buscaUsuario = async user => { 
    try {
        const resp = await axios.get(`https://api.github.com/users/${user}`);
        console.log(resp.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}

buscaUsuario('diego3g');
