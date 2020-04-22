# Exercícios: Módulo 02

Todos os exercícios abaixo necessitam que você esteja com o Webpack configurado.

Com o [yarn](https://yarnpkg.com/) instalado, execute os seguintes comandos no terminal para rodar o projeto:

* `yarn` // Para instalar as dependências
* `yarn dev` // Para executar o projeto

## 1º exercício

Crie um arquivo chamado *functions.js* com o seguinte conteúdo:
```
export const idade = 23;
export default class Usuario {
    static info() {
        console.log('Apenas teste');
    }
}
```

### 1.1

Agora em seu arquivo principal import apenas a classe *Usuario* renomeando-a para *ClasseUsuario* e chame a funão *info()*;

### 1.2

Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;

### 1.3

Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade para *IdadeUsuario*.