
// --------------------------------------------------------------------------------
// 1 - Instalar yarn
//     > cmd yarn init 
// 2 - Instalar dependencia babel 
//          * babel: traduz as funcionalidades do es6+ para javascript, de forma 
//                   que qualquer browser (que nao suporte es6+) possa interpretar.
//          > yarn add @babel/cli
//          > yarn add @babel/preset-env --d
//          > yarn add @babel/core 
// 3 - Criar e configurar arquivo de config babel .babelrc
//          { "presets": ["@babel/preset-env"] }
//          valida o ambiente que esta sendo executado o script e 
//          fica responsavel por converter o codigo javascript de uma 
//          forma que o browser consiga interpretar.
// 4 - Atualizar arquivo package.json
//          * armazena informacoes de dependencia da aplicacao.
//          * Incluir configuracoes de script no arquivo para que as alteracoes 
//            sejam monitoradas e qualquer alteracao no arquivo main.js seja 
//            refletida automaticamente no arquivo bundle.js
//              "scripts": {
//                  "dev": "babel ./main.js -o ./bundle.js -w"
//              }
// 5 - Executar cmd yarn dev 
//      * cmd yarn seguido do nome da chave definida no arquivo package.json que 
//        contem o nome do arquivo principal js.
// --------------------------------------------------------------------------------


class Teste { 
    /*
        Obs: verificar no arquivo bundle.js a conversao realizada pelo babel.
    */
    metodo() {
    }

    outro() {        
    }
}


// ------------------------------------------------------------------------
//  Classes
// ------------------------------------------------------------------------

class List {
    constructor() {
        this.data = [];
    }

    add(val) {
        this.data.push(val);
        console.log(this.data);
    }
}

class TodoList extends List { 
    constructor() { 
        super();

        this.todos = [];
        this.usuario = 'User Teste';
    }

    addTodo() {
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }    

    mostarNomeUsuario() {
        console.log(this.usuario);
    }
}

class Matematica {
    static somar(a, b) {
        return a + b;
    }
}

const minhaLista = new TodoList();

document.getElementById('btn').onclick = function() {
    minhaLista.addTodo();
    minhaLista.add('New Todo');
    minhaLista.mostarNomeUsuario();
}


console.log(Matematica.somar(15, 5));
console.log(Matematica.somar(1, 8));
console.log(Matematica.somar(34, 85));
console.log(Matematica.somar(0, 91));



// ------------------------------------------------------------------------
// Const & Let
// ------------------------------------------------------------------------

// Nao é possivel alterar constantes, mas é permitido 'Mutar' valores de constantes

const a = 1;
// a = 15    -- gera erro.

const usuario = { nome: 'Nome Usuario' };
console.log(usuario.nome);

usuario.nome = 'Outro Nome';
console.log(usuario.nome);


// Variaveis de escopo:

function teste(x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y);
    }
}

teste(10);
//console.log(y);      => Uncaught ReferenceError: y is not defined



// ------------------------------------------------------------------------
// Operacoes em Array
// ------------------------------------------------------------------------

const arr = [1, 3, 4, 5, 8, 9];

// Map: Percorre o vetor e retorna/executa informacao.
const newArr = arr.map(function(item){
    return item * 2;
});

console.log(newArr);

// Reduce: 
const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

// Filter: 
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

// Find: Verificar se existe ou quer pesquisar informacao no array.
const find = arr.find(function(item){
    //return item === 2;    // undefined  
    return item === 4;      // 4
});

console.log(find);



// ------------------------------------------------------------------------
// Arrow Functions
// ------------------------------------------------------------------------

const _arr = [1, 3, 4, 5, 6];

const _newArr = _arr.map(function(item){
    return item * 2;
});
console.log(_newArr);


const newArrII = arr.map(item => item * 2);
console.log(newArrII);


const _teste = () => ({ nome: 'Nome Usuario' });
console.log(_teste());



// ------------------------------------------------------------------------
// Valores Padrao
// ------------------------------------------------------------------------

function soma(a, b ) {
    return a + b;
}

console.log(soma(1));   // NaN
console.log(soma());    // NaN


function somaII(a = 3, b = 5 ) {
    return a + b;
}

console.log(somaII(1));   // 6
console.log(somaII());    // 8



// ------------------------------------------------------------------------
// Desestruturacao
// ------------------------------------------------------------------------
const user = {
    nome: 'Nome Usuario',
    idade: 40,
    endereco: {
        cidade: 'Rio Sul',
        estado: 'SC'
    },
};
/*
let nome = usuario.nome;
let idade = usuario.idade;
let cidade = usuario.endereco.cidade;
*/

var { nome, idade } = user;

console.log(nome);
console.log(idade);

var { nome, idade, endereco: { cidade } } = user;

console.log(cidade);

/*
function mostrarNome(usuario) {
    console.log(usuario.nome);
}
*/

function mostrarNome({ nome, idade }) {
    console.log(nome);
    console.log(idade);
}




// ------------------------------------------------------------------------
// Operadores Rest / Spread
// ------------------------------------------------------------------------

// instalar plugin babel => yarn add @babel/plugin-proposal-object-rest-spread
// compiar comando para o array de plugins do '.babelrc' => "plugins": ["@babel/plugin-proposal-object-rest-spread"]
// reiniciar cmd yarn dev no terminal

// Rest: obter o 'resto' das informacoes

const novoUsuario = {
    nomeUsuario: 'Nome Usuario',
    idadeUsuario: 55,
    empresaUsuario: 'Rocketseat',
};

const { nomeUsuario, ...resto } = novoUsuario;

console.log(nomeUsuario);
console.log(resto);

// Utilizacao em arrays
const _array = [1, 2, 3, 4, 5];
const [a, b, ...c] = _array;

console.log(a);
console.log(b);
console.log(c);

// Em parametros de funcao
function funcaoSoma(a, b) {
    return a + b;
}

console.log(funcaoSoma(1, 3));

function funcaoSomaRestI(...params) {
    console.log(params);
    return params.reduce((total, next) => total + next);
}

console.log(funcaoSomaRestI(1, 3, 4));

function funcaoSomaRestII(a, b, ...params) {
    return params;
}

console.log(funcaoSomaRestII(1, 3, 4, 8, 9, 15));


// Spread: Repassa a estrutura de um objeto para outra estrutura de dados.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);


const usuario1 = {
    nome1: 'Nome Usuario 1',
    idade: 37,
    empresa: 'Nova empresa',
}

// Altera uma propriedade de um objeto ja existente
const usuario2 = { ...usuario1, nome1: 'Nome Usuario 2' };
console.log(usuario2);



// ------------------------------------------------------------------------
// Template Literals
// ------------------------------------------------------------------------

const val1 = 'Nome';
const val2 = 30;

console.log(`Meu nome ${val1} e minha idade é ${val2} anos`);



// ------------------------------------------------------------------------
// Object Short Syntax
// ------------------------------------------------------------------------

const nomeAluno = 'Aluno A';
const idadeAluno = 22;

/*
const aluno = {
    nomeAluno: nomeAluno,
    idadeAluno: idadeAluno,
    empresa: 'Escola Alpha',
}
*/

// Caso o nome da propriedade seja igual a variavel, pode-se usar a sintaxe curta de objeto.
const aluno = {
    nomeAluno,
    idadeAluno,
    empresa: 'Escola Alpha',
}

console.log(aluno.nomeAluno);
