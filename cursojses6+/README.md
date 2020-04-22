# Resolução dos desafios do curso Javascript ES6+ da Rocketseat :rocket:

**Abaixo o que é mostrado durante o curso.**

* Webpack
* Classes
* Arrow functions
* Desestruturação
* Rest/spread
* Import/export
* Async/await

**Ferramentas instaladas**

1. [Nodejs](https://nodejs.org/)
2. [Yarn](https://yarnpkg.com/)

<hr>

## Webpack

Empacotador de módulos para aplicações Javascript modernas. O principal objetivo é agrupar arquivos Javascript para uso em navegador, mas também é capaz de tansformar, agrupar ou empacotar praticamente qualquer recurso ativo.

> Serviço que vai nos disponibilizar uma forma da gente poder trabalhar com vários arquivos na nossa aplicação

## Classes

Exemplo simples de Classe e sua utilização no Javascript
```
class List {
    // primeiro metodo a ser executado toda vez que criar uma nova instancia da classe
    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
        console.log(this.todos);
    }
}
```

```
class TotoList extends List {
    constructor() {
        super();

        this.usuario = 'John Doe';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TotoList();

// Considerando um elemento com id #novotodo no html
document.querySelector('#novotodo').onclick = () => { MinhaLista.add('Novo todo'); }

MinhaLista.mostraUsuario();
```

## Arrow functions

Forma de criar funções com sintaxe mais curta (comparada a uma expressão de função) usando o operador => e não tem o seu próprio this, ou seja, não é mais necessário fazer _bind()_

`const arr = [1, 3, 4, 5, 6];`

``` 
const newArr = arr.map(function(item) {
    return item * 2;
});
```

Transformando em arrow function
```
const newArr = arr.map((item) => {
    return item * 2;
});
```

Encurtando ainda mais a sintaxe de uma arrow function
```
const newArr = arr.map(item => item * 2);
```

Retornando objeto
```
const nome = 'John Doe';
const idade = 28;

const mostraUsuario = (nome = 'Jane Doe', idade = 25) => {
    return {
        nome,
        idade,
    }
}
console.log(mostraUsuario()); // {nome: "Jane Doe", idade: 25}
```

Encurtando a função acima
```
const nome = 'John Doe';
const idade = 28;

// para retirar o return e retornar um objeto diretamente (depois da arrow =>), precisamos colocar um parênteses por volta
const mostraUsuario = (nome = 'Jane Doe', idade = 25) => ({
    nome,
    idade,
});
console.log(mostraUsuario(nome, idade)); // {nome: "John Doe", idade: 28}
```

Retornando array
```
const arr = () => [1, 2, 3, 4];
console.log(arr); // [1, 2, 3, 4]
```

## Operações em Array

Considere o array para os exemplos abaixo: `const arr = [1, 3, 4, 5, 8, 9];`

### Map

Serve para percorrer o _array_ e retornar uma novação informação

``` 
const newArr = arr.map((item, index) => {
    return item + index;
});

console.log(newArr); // 1, 4, 6, 8, 12, 14
```

### Reduce

Uma forma de consumir/percorrer todo o _array_ e transformar em uma única informação/variável (retorna um único número).

```
const sum = arr.reduce((total, next) => {
    return total + next;
});

// total: 0 + next: 1
// total: 1 + next: 3
// total: 4 + next: 4
// total: 8 + next: 5
// total: 13 + next: 8
// total: 21 + next: 9
// total: 30

console.log(sum); // 30
```

### Filter

Cria um novo _array_ de acordo com alguma condição. A expressão dentro do _filter_, precisa obrigatoriamente retornar _true_ ou _false_ para determinar se o item estará ou não no novo _array_

```
const filter = arr.filter(item => {
    return item % 2 === 0;
});

console.log(filter); // 4, 8
```

### Find

É utilizado quando queremos verificar se existe alguma informação dentro do _array_ ou se conseguimos encontrar essa informação dentro dele. A expressão dentro do _find_ também precisa retornar _true_ ou _false_. Se conseguir achar a informação dentro do _array_, ele retorna a própria informação, se não conseguir achar, retorna _undefined_

```
const find = num => arr.find(item => {
    return item === num;
});

console.log(find(5)); // 5
console.log(find(2)); // undefined
```

## Desestruturação

Exemplo com objeto. Desestruturação simples
```
const usuario = {
    nome: 'John Doe',
    idade: 30,
    endereco: {
        cidade: 'Arroio do Sal',
        estado: 'RS'
    }
}

const { nome, idade, endereco: { cidade, estado } } = usuario;

console.log(nome); // John Doe
console.log(cidade); // Arroio do Sal
```

Desestruturação em parâmetros de função
```
function mostraUsuario({ nome, idade }) {
    console.log(nome); // John Doe
    console.log(idade); // 30
}

mostraUsuario(usuario);
```

Desestruturação em array
```
const arrNums = [1, 2, 3, 4, 5];

const [ num1, num2 ] = arrNums;

console.log(num1); // 1
console.log(num2); // 2
```

## Rest/spread

### Rest

Serve para pegar o "resto" da propriedade

Exemplo com objeto
```
const usuario = {
    nome: 'Jane Doe',
    idade: 25,
    empresa: 'Rocketseat'
}

const { nome, ...otherInfos } = usuario;

console.log(nome); // Jane Doe
console.log(otherInfos); // {idade: 25, empresa: "Rocketseat"}
```

Exemplo com array
```
const arr = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // [3, 4, 5];
```

Exemplo com função
```
function soma(...params) {
    const result = params.reduce((total, next) => {
        return total + next;
    });

    return result;
}
```

Encurtando a função acima
```
function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4)); // 8
```

### Spread

Faz o papel de propragar/de repassar as informações de algum objeto ou de um array para outra estrutura de dados

Exemplo com array
```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

Exemplo com objeto.
```
const usuario1 = {
    nome: 'John Doe',
    idade: 30,
    empresa: 'Rocketseat',
};

// Criando um nobo objeto de usuario com todas as mesmas propriedades, trocando o valor de apenas uma das propriedades
const usuario2 = { ...usuario1, nome: 'Billi Doe' };

console.log(usuario1); // {nome: 'John Doe', idade: 30, empresa: 'Rocketseat'}
console.log(usuario2); // {nome: 'Billi Doe', idade: 30, empresa: 'Rocketseat'}
```

## Object Short Syntax

Quando o nome da propriedade é igual ao nome da variável dentro do objeto, podemos simplificar sem repetir os nomes, deixando apenas um deles

```
const nome = 'John Doe';
const idade = 30;

const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Rocketseat'
}
console.log(usuario); // {nome: "John Doe", idade: 30, empresa: "Rocketseat"}
```

Short Syntax
```
const usuario = {
    nome,
    idade,
    empresa: 'Rocketseat'
}
console.log(usuario); // {nome: "John Doe", idade: 30, empresa: "Rocketseat"}
```

## Import/export

Considerando o arquivo calcs.js para todos os exemplos abaixo

Export antes das declarações
```
<!-- calcs.js -->
export default function soma(a, b) { // Exportação padrão - apenas uma por script
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function mult(a, b) {
    return a * b;
}
```

Export depois das declarações
```
<!-- calcs.js -->
function soma(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

<!-- Exportando listas -->
export { soma as default, sub, mult };
```

Import default
```
<!-- main.js -->
import soma from './calcs';

console.log(soma(1, 2)); // 3
```

Import de outras funções
```
<!-- main.js -->
import { sub, mult } from './calcs';

console.log(sub(4, 2)); // 2
console.log(mult(4, 2)); // 8
```

Renomenando/Criando alias com as
```
<!-- main.js -->
import { sub as s, mult as m } from './calcs';

console.log(s(4, 2)); // 2
console.log(m(4, 2)); // 8
```

Import de uma função default pode ser renomeada diretamente
```
<!-- main.js -->    
import somaFunction from './calcs';

console.log(somaFunction(1, 2)); // 3
```

Import de função default e outras funções
```
<!-- main.js -->
import soma, { sub, mult } from './calcs';

console.log(soma(1, 2)); // 3
console.log(sub(4, 2)); // 2
console.log(mult(2, 3)); // 6
```

Import de função default renomeada e das outras funções com *
```
<!-- main.js -->
import soma, * as calc from './calcs';

console.log(soma(1, 2)); // 3
console.log(calc.sub(4, 2)); // 2
console.log(calc.mult(2, 3)); // 6
```

Importando tudo com * (a função default é nomeada como próprio default)
```
<!-- main.js -->
import * as calc from './calcs';

console.log(calc.default(1, 2)); // 3

<!-- podemos atribuir a uma variável -->
const soma = calc.default;

console.log(soma(1, 2)); // 3
console.log(calc.sub(4, 2)); // 2
console.log(calc.mult(2, 3)); // 6
```

## Async/await
