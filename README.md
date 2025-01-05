
## AS65A - Grupo 4  
### Projeto Bons Fluidos

### Equipe de Desenvolvimento  

**Front-end**:  
- Pedro de Oliveira Machado - RA: 2417855  
- Sérgio Alexandre Alvarenga de Almeida - RA: 2346591  

---

## Objetivo do Sistema  

O sistema foi desenvolvido como parte da disciplina Certificadora de Competência Identitária do curso de Análise e Desenvolvimento de Sistemas da UTFPR-CP. Ele tem como objetivo implementar um sistema de gestão de estoque para o projeto de extensão **Bons Fluidos**, que promove a doação de produtos de higiene feminina para meninas em situação de vulnerabilidade.  

As principais funcionalidades do sistema incluem o registro de movimentações no estoque (doações recebidas e distribuídas), cadastro de produtos, participantes (doadores e receptores) e controle de usuários.

---

## Funcionalidades Principais  

1. **Autenticação**  
   - Dois tipos de usuários: `admin_master` e `admin`.  
   - Registro de movimentações, cadastro de produtos e participantes permitido para ambos.

2. **Cadastro e Edição**  
   - Produtos: Cadastro e edição de produtos disponíveis no estoque.  
   - Participantes: Registro e edição de doadores (anônimos ou identificados) e receptores.  
   - Usuários: Registro e edição de usuários (admins ou admin_master).  

3. **Registro de Movimentações**  
   - Registro detalhado de movimentações no estoque:  
     - Tipo: Entrada ou saída.  
     - Quantidade.  
     - Informações do doador ou receptor.  
     - Usuário responsável pelo registro.  
   - Ajuste automático do estoque com base nas movimentações.  

---

## Tecnologias Utilizadas  

### Front-end  

- **React** (v18.3.1) - Biblioteca JavaScript para interfaces de usuário.  
- **React DOM** (v18.3.1) - Manipulação da árvore DOM.  
- **React Router DOM** (v6.28.0) - Gerenciamento de rotas.  
- **Axios** (v1.7.9) - Cliente HTTP para requisições.  
- **Vite** (v5.4.10) - Ferramenta para desenvolvimento rápido.  
- **Sass** (v1.80.5) - Pré-processador CSS.  
- **ESLint** (v9.13.0) - Linting para identificar problemas no código.  

---

## Configuração do Ambiente  

### 1. Instalação do Front-end  

1. Clone o repositório:  
   ```bash
   git clone https://github.com/Serg-Ale/AS65A-Grupo-4-FrontEnd.git
   ```
2. Acesse o diretório do projeto:  
   ```bash
   cd AS65A-Grupo-4-FrontEnd/
   ```
3. Instale as dependências:  
   ```bash
   npm install
   ```
4. Inicie o servidor:  
   ```bash
   npm run dev
   ```  


## Links dos Repositórios  

- **Back-end**: [AS65A-Grupo-4-BackEnd](https://github.com/Matari73/AS65A-Grupo-4-BackEnd)  
- **Front-end**: [AS65A-Grupo-4-FrontEnd](https://github.com/Serg-Ale/AS65A-Grupo-4-FrontEnd)  

--- 

### Observação Final  

Este projeto foi desenvolvido com o objetivo de proporcionar uma solução prática e eficaz para a gestão de doações e estoques do projeto Bons Fluidos, reforçando a aplicabilidade dos conhecimentos adquiridos no curso.
