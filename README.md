# AS65A-Grupo-4-FrontEnd

O sistema foi desenvolvido como parte da disciplina Certificadora de Competência Identitária do curso de Análise e Desenvolvimento de Sistemas da UTFPR-CP. Ele tem como objetivo implementar um sistema de gestão de estoque para o projeto de extensão **Bons Fluidos**, que promove a doação de produtos de higiene feminina para meninas em situação de vulnerabilidade.

As principais funcionalidades do sistema incluem o registro de movimentações no estoque (doações recebidas e distribuídas), cadastro de produtos, participantes (doadores e receptores) e controle de usuários.

---
## Desenvolvedores

- **Pedro de Oliveira Machado**
- **Sérgio Alexandre Alvarenga de Almeida**

---
## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.  
    **Versão**: 18.3.1  
    **Link**: [React](https://react.dev/)
    
- **React DOM**: Biblioteca complementar ao React para manipulação da árvore DOM no navegador.  
    **Versão**: 18.3.1  
    **Link**: [React DOM](https://react.dev/reference/react-dom)
    
- **React Router DOM**: Biblioteca para gerenciamento de rotas em aplicações React.  
    **Versão**: 6.28.0  
    **Link**: [React Router DOM](https://reactrouter.com/)
    
- **Axios**: Cliente HTTP baseado em Promises para realizar requisições.  
    **Versão**: 1.7.9  
    **Link**: [Axios](https://axios-http.com/)
    
- **Vite**: Ferramenta de construção de aplicações modernas com um servidor de desenvolvimento rápido.  
    **Versão**: 5.4.10  
    **Link**: [Vite](https://vitejs.dev/)
    
- **Sass**: Pré-processador CSS que adiciona funcionalidades como variáveis, mixins e nesting.  
    **Versão**: 1.80.5  
    **Link**: [Sass](https://sass-lang.com/)
    
- **ESLint**: Ferramenta de linting para identificar e corrigir problemas em código JavaScript.  
    **Versão**: 9.13.0  
    **Link**: [ESLint](https://eslint.org/)
    
- **ESLint Plugin React**: Conjunto de regras do ESLint para garantir boas práticas no uso do React.  
    **Versão**: 7.37.2  
    **Link**: [ESLint Plugin React](https://www.npmjs.com/package/eslint-plugin-react)
    
- **ESLint Plugin React Hooks**: Plugin do ESLint para validar regras específicas relacionadas aos React Hooks.  
    **Versão**: 5.0.0  
    **Link**: [ESLint Plugin React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
    
- **ESLint Plugin React Refresh**: Plugin para integração de React Refresh com o ESLint durante o desenvolvimento.  
    **Versão**: 0.4.14  
    **Link**: [ESLint Plugin React Refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
    
- **Globals**: Lista de variáveis globais reconhecidas por diferentes ambientes (Node.js, Browser, etc.).  
    **Versão**: 15.11.0  
    **Link**: [Globals](https://www.npmjs.com/package/globals)
    
- **@Vitejs/plugin-react**: Plugin oficial do Vite para suporte ao React.  
    **Versão**: 4.3.3  
    **Link**: [@Vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)
    

---

## Configuração do Ambiente

### Passos para Instalação

1. Clone este repositório:
    
    ```bash
    git clone https://github.com/Serg-Ale/AS65A-Grupo-4-FrontEnd
    ```
    
2. Instale as dependências do projeto:
    
    ```bash
    npm install
    ```
    
3. Inicie o servidor de desenvolvimento:
    
    ```bash
    npm run dev
    ```
    
4. Acesse a aplicação no navegador em `http://localhost:5173`.
    

---

## Integração com o Back-End

Este projeto consome os serviços da API desenvolvida no repositório [AS65A-Grupo-4-BackEnd](https://github.com/Matari73/AS65A-Grupo-4-BackEnd) pela Giovana Araújo Hoffmann e pela Mariana De Oliveira. Certifique-se de configurar o back-end seguindo as instruções disponíveis no repositório correspondente.

---

## Testando o Sistema

Realize os testes navegando pelas funcionalidades do front-end e verificando as operações em conjunto com o back-end.

### Conta de Acesso Padrão

O repositório back-end possui um arquivo `seed.js` que insere um usuário do tipo `admin_master` no banco de dados com as seguintes credenciais:

- **Nome**: `admin_master`
- **Senha**: `sua_senha_segura_master`

Essas credenciais devem ser utilizadas para realizar o login na aplicação.

---
### Observação Final

Este projeto foi desenvolvido com o objetivo de proporcionar uma solução prática e eficaz para a gestão de doações e estoques do projeto Bons Fluidos, reforçando a aplicabilidade dos conhecimentos adquiridos no curso.
