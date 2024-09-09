# Documentação da API do Sistema de Pedidos

## Visão Geral

Esta API foi desenvolvida como parte de um projeto para o curso de Sistemas de Informação e visa fornecer uma interface para o gerenciamento de pedidos, comandas, clientes, produtos, pagamentos, e itens de pedido. A API segue uma arquitetura RESTful e foi construída utilizando Node.js, Express, Sequelize, e SQLite como banco de dados.

## Arquitetura da API

A arquitetura da API está organizada de forma modular, utilizando o padrão MVC (Model-View-Controller). Abaixo está um resumo dos principais componentes da arquitetura:

- **Models**: Representam as entidades do sistema, como Cliente, Comanda, Pedido, Produto, ItemPedido, e Pagamento. Os modelos são definidos usando Sequelize, que facilita a interação com o banco de dados relacional SQLite.
  
- **Controllers**: Contêm a lógica de negócio e manipulam as requisições HTTP recebidas pelas rotas. Cada entidade possui um controlador dedicado para gerenciar as operações CRUD (Create, Read, Update, Delete).

- **Routes**: Definem os endpoints da API e redirecionam as requisições para os controladores apropriados. As rotas estão organizadas por entidade para manter a estrutura clara e de fácil manutenção.

- **Config**: Contém as configurações da aplicação, como a configuração do banco de dados, onde o Sequelize é inicializado com as credenciais e parâmetros necessários para conectar-se ao SQLite.

## Funcionalidades da API

A API fornece as seguintes funcionalidades para cada entidade:

### 1. Clientes

- **POST /clientes**: Cria um novo cliente.
- **GET /clientes**: Recupera todos os clientes com paginação.
- **PATCH /clientes/:id**: Atualiza as informações de um cliente existente.
- **DELETE /clientes/:id**: Realiza um soft delete no cliente especificado.

### 2. Comandas

- **POST /comandas**: Cria uma nova comanda.
- **GET /comandas**: Recupera todas as comandas com paginação.
- **PATCH /comandas/:id**: Atualiza uma comanda existente.
- **DELETE /comandas/:id**: Realiza um soft delete na comanda especificada.

### 3. Pedidos

- **POST /pedidos**: Cria um novo pedido.
- **GET /pedidos**: Recupera todos os pedidos com paginação.
- **PATCH /pedidos/:id**: Atualiza as informações de um pedido existente.
- **DELETE /pedidos/:id**: Realiza um soft delete no pedido especificado.

### 4. Itens do Pedido

- **POST /itemPedidos**: Adiciona um novo item a um pedido.
- **GET /itemPedidos**: Recupera todos os itens de pedidos com paginação.
- **PATCH /itemPedidos/:id**: Atualiza um item de pedido existente.
- **DELETE /itemPedidos/:id**: Realiza um soft delete no item do pedido especificado.

### 5. Pagamentos

- **POST /pagamentos**: Registra um novo pagamento.
- **GET /pagamentos**: Recupera todos os pagamentos com paginação.
- **PATCH /pagamentos/:id**: Atualiza um pagamento existente.
- **DELETE /pagamentos/:id**: Realiza um soft delete no pagamento especificado.

### 6. Produtos

- **POST /produtos**: Cria um novo produto.
- **GET /produtos**: Recupera todos os produtos com paginação.
- **PATCH /produtos/:id**: Atualiza as informações de um produto existente.
- **DELETE /produtos/:id**: Realiza um soft delete no produto especificado.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para construção da API.
- **Express**: Framework para aplicações web que facilita o roteamento e a criação de middleware.
- **Sequelize**: ORM (Object-Relational Mapping) utilizado para interagir com o banco de dados SQLite.
- **SQLite**: Banco de dados relacional utilizado para persistência de dados.
- **Joi**: Biblioteca para validação de entrada de dados, garantindo a integridade das informações enviadas à API.

## Importação da Coleção do Postman

Para facilitar o teste dos endpoints da API, você pode importar a coleção do Postman através do link abaixo:

[Coleção do Postman](https://github.com/marcosmessias-src/api-pedidos-ifal/blob/main/postman-collection.json)

Esse coleção permite importar todos os endpoints configurados para testes diretamente no Postman, facilitando a interação com a API.

## Conclusão

A API foi projetada para ser escalável e de fácil manutenção, utilizando boas práticas de desenvolvimento e uma estrutura clara baseada no padrão MVC. Com as funcionalidades de CRUD para cada entidade, a API cobre as principais operações necessárias para gerenciar um sistema de pedidos de forma eficiente.
