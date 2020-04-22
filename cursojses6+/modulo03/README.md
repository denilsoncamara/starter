# Exercícios: Módulo 02

Todos os exercícios abaixo necessitam que você esteja com o plugin do *Async/Await* do Babel e o *babel-polyfill* devidamente configurados. Em alguns exercícios é necessário instalar o *Axios*.

Com o [yarn](https://yarnpkg.com/) instalado, execute os seguintes comandos no terminal para rodar o projeto:

* `yarn` // Para instalar as dependências
* `yarn dev` // Para executar o projeto

## Exercício

Transforme os seguintes trechos de código utilizando *async/await*:
```
// Função delay aciona o .then após 1s
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
```
```
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
```
``` 
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
```
```
const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${usuario}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}

buscaUsuario('diego3g');
```