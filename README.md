# To-Dos API&nbsp; :white_check_mark:

![License](https://badgen.net/badge/License/MIT/purple?icon=)
![Node.js](https://badgen.net/badge/Node.js/v22/green?icon=)
![Docker](https://badgen.net/badge/icon/Available?icon=docker&label)

Esta é uma API RESTful para gerenciar tarefas de usuários. Permite que os usuários autentiquem, criem, atualizem, deletem e listem tarefas.

<br>

## Tecnologias utilizadas&nbsp; 🔨

<div>
    <img align='center' height='64' width='60' title='Node.js' alt='node' src='https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img align='center' height='70' width='70' title='Express' alt='express' src='https://img.icons8.com/office40/512/express-js.png' />&nbsp;&nbsp;&nbsp;&nbsp;
    <img align='center' height='62' width='56' title='Sequelize' alt='sequelize' src='https://static-00.iconduck.com/assets.00/sequelize-original-icon-885x1024-r8dswyvj.png' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img align='center' height='48' width='50' title='JsonWebToken' alt='jsonwebtoken' src='https://images.ctfassets.net/kbkgmx9upatd/6E4gdxqqmafg9Usjz9etTU/bc93ad8e3cea217c3de390239ff34c8c/jwt-hero.png' /> &nbsp;&nbsp;&nbsp;&nbsp;
    <img align='center' height='50' width='50' title='PostgreSQL' alt='postgresql' src='https://cdn-icons-png.flaticon.com/512/5968/5968342.png' /> &nbsp;
    <img align='center' height='62' width='72' title='Swagger' alt='swagger' src='https://github.com/bush1D3v/tsbank_api/assets/133554156/6739401f-d03b-47f8-b01f-88da2a9075d1' /> &nbsp;
    <img align='center' height='55' width='55' title='Docker' alt='docker' src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' />
</div>

<br>

## Instalação&nbsp; 🖥️

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/brenonsc/todos-api.git
   cd todos-api
   ```

2. **Copie o arquivo `.env.example` para `.env` e mude as variáveis de ambiente caso sinta necessidade:**

   ```sh
   cp .env.example .env
   ```

3. **Certifique-se de que o Docker está instalado na sua máquina.**<br>
   Caso não tenha, faça o download em: [Docker Desktop](https://www.docker.com/products/docker-desktop/).

4. **Execute a aplicação:**

   ```sh
   docker compose up --build
   ```

   <br>

## Documentação&nbsp; :arrow_forward:

A API está documentada em Swagger, e pode ser acessada em `http://localhost:3000/apidocs`.

<br>

## Endpoints&nbsp; :hash:

### Auth

- **POST /login**

  - Resumo: Autenticar um usuário.

  - Corpo da Solicitação:

    ```json
    {
      "email": "john@email.com",
      "password": "p@ssw0rd"
    }
    ```

  - Respostas:

    - 200: Usuário autenticado com sucesso.
    - 400: Solicitação inválida.
    - 401: Email ou senha inválidos.
    - 500: Erro interno do servidor.

- **POST /logout**

  - Resumo: Deslogar um usuário.
  - Respostas:
    - 204: Usuário deslogado com sucesso.
    - 401: Usuário não logado.
    - 500: Erro interno do servidor.

### Users

- **POST /users**

  - Resumo: Criar um novo usuário.

  - Corpo da Solicitação:

    ```json
    {
      "name": "John Doe",
      "email": "john@email.com",
      "password": "p@ssw0rd"
    }
    ```

  - Respostas:

    - 201: Usuário criado com sucesso.
    - 400: Solicitação inválida.
    - 500: Erro interno do servidor.

- **PUT /users/{id}**

  - Resumo: Atualizar um usuário.

  - Corpo da Solicitação:

    ```json
    {
      "name": "Jane Doe",
      "email": "jane@email.com",
      "password": "p@ssw0rd"
    }
    ```

  - Respostas:

    - 200: Usuário atualizado com sucesso.
    - 400: Solicitação inválida.
    - 401: Usuário não logado.
    - 403: Usuário não autorizado.
    - 404: Usuário não encontrado.
    - 500: Erro interno do servidor.

- **DELETE /users/{id}**

  - Resumo: Deletar um usuário.
  - Respostas:
    - 204: Usuário deletado com sucesso.
    - 401: Usuário não logado.
    - 403: Usuário não autorizado.
    - 404: Usuário não encontrado.
    - 500: Erro interno do servidor.

### Todos

- **GET /todos**

  - Resumo: Listar todas as tarefas do usuário.
  - Respostas:
    - 200: Tarefas listadas com sucesso.
    - 401: Usuário não logado.
    - 500: Erro interno do servidor.

- **POST /todos**

  - Resumo: Criar uma nova tarefa.

  - Corpo da Solicitação:

    ```json
    {
      "title": "Swagger",
      "description": "Configurar Swagger na aplicação.",
      "status": "Pendente"
    }
    ```

  - Respostas:

    - 201: Tarefa criada com sucesso.
    - 401: Usuário não logado.
    - 500: Erro interno do servidor.

- **GET /todos/{id}**

  - Resumo: Obter uma tarefa específica do usuário.
  - Respostas:
    - 200: Tarefa obtida com sucesso.
    - 401: Usuário não logado.
    - 404: Tarefa não encontrada ou não pertence ao usuário.
    - 500: Erro interno do servidor.

- **PUT /todos/{id}**

  - Resumo: Atualizar uma tarefa.

  - Corpo da Solicitação:

    ```json
    {
      "title": "Swagger",
      "description": "Configurar Swagger na aplicação.",
      "status": "Concluído"
    }
    ```

  - Respostas:

    - 200: Tarefa atualizada com sucesso.
    - 401: Usuário não logado.
    - 404: Tarefa não encontrada ou não pertence ao usuário.
    - 500: Erro interno do servidor.

- **DELETE /todos/{id}**

  - Resumo: Deletar uma tarefa.
  - Respostas:
    - 204: Tarefa deletada com sucesso.
    - 401: Usuário não logado.
    - 404: Tarefa não encontrada ou não pertence ao usuário.
    - 500: Erro interno do servidor.

<br>

## Estrutura do projeto&nbsp; :open_file_folder:

``` bash
src
   |-- config
   |   |-- blacklist.js
   |   |-- database.js
   |-- controllers
   |   |-- AuthController.js
   |   |-- TodoController.js
   |   |-- UserController.js
   |-- database
   |   |-- migrations
   |   |   |-- 20250215164210-create-todos.js
   |   |   |-- 20250215204534-create-users.js
   |   |   |-- 20250215220755-add-user-id-to-todos.js
   |-- middleware
   |   |-- auth.js
   |-- models
   |   |-- index.js
   |   |-- todos.js
   |   |-- users.js
   |-- app.js
   |-- routes.js
   |-- server.js
.env.example
.gitignore
.sequelizerc
Dockerfile
docker-compose.yaml
LICENSE
package-lock.json
package.json
README.md
swagger.json
yarn.lock
```

<br>

## Motivação de uso de ferramentas&nbsp; 🧰

### Docker&nbsp; 🐳

A utilização do **Docker** concentra vários benefícios, como a facilidade de implantação, de forma que a aplicação funcione da mesma maneira em máquinas diferentes e a padronização do ambiente de desenvolvimento, possibilitando criar containers independentes e isolados.

### Sequelize&nbsp; :diamond_shape_with_a_dot_inside:

**Sequelize** é um ORM (Object-Relational Mapping) para Node.js que facilita o trabalho com bancos de dados SQL. Ele suporta a criação de migrações, o que ajuda a manter o esquema do banco de dados com controle de versão. Além disso, o **Sequelize** simplifica a manipulação de dados com uma API intuitiva, reduzindo a quantidade de código SQL necessário.

<br>

## Licença&nbsp; 📋

Este software está licenciado sob a [Licença MIT](https://github.com/brenonsc/todos-api/blob/main/LICENSE).
