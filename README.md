# Gerenciador de Clientes

**Descrição:**

Este projeto é uma aplicação web completa para gerenciar clientes, com funcionalidades de CRUD (Criar, Ler, Atualizar e Deletar) e otimização de rota.

**Tecnologias:**

* **Front-end:** React com PrimeReact
* **Back-end:** NodeJS com Express
* **Banco de dados:** PostgreSQL

**Funcionalidades:**

* Cadastro de clientes com nome, email, telefone e localização.
* Consulta de clientes por nome, email, telefone ou localização.
* Edição de dados dos clientes.
* Exclusão de clientes.
* Otimização de rota para visitação dos clientes.

**Como iniciar:**

1. **Clone o repositório:** `git clone https://github.com/paulorenan/customer-management.git`
3. **Inicie os containers:** `docker compose up`
4. **Acesse o front-end:** `localhost:3000`

**Recursos:**

* **Vídeo de Apresentação:** Assista a uma demonstração completa do projeto na pasta raiz (`Video Apresentação do Projeto.mp4`).


* **Documentação:** Detalhes sobre a API e a estrutura do projeto.
**API:**

A API do projeto oferece os seguintes endpoints:

**GET /customers**

Retorna todos os clientes cadastrados no sistema.

**GET /customers/:id**

Retorna um único cliente pelo seu ID.

**PUT /customers/:id**

Atualiza as informações de um cliente existente.

**POST /customers**

Cria um novo cliente no sistema.

**DELETE /customers/:id**

Apaga um cliente pelo seu ID.

**GET /customers/route**

Retorna todos os clientes na ordem de rota mais rápida para visitá-los, utilizando o algoritmo de otimização de rota TSP (Traveling Salesman Problem).

**Exemplos de uso:**

* Listar todos os clientes: `curl -X GET http://localhost:4000/api/customers`
* Buscar um cliente pelo ID: `curl -X GET http://localhost:4000/api/customers/1`
* Atualizar um cliente: `curl -X PUT http://localhost:4000/api/customers/1 -H "Content-Type: application/json" -d '{ "name": "Novo Nome", "email": "novoemail@email.com", "phone": "2255447788", "address": "1,2" }'`
* Criar um novo cliente: `curl -X POST http://localhost:4000/api/customers -H "Content-Type: application/json" -d '{ "name": "Novo Cliente", "email": "novocliente@email.com", "phone": "2255447788", "address": "3,4" }'`
* Apagar um cliente: `curl -X DELETE http://localhost:4000/api/customers/1`
* Obter a rota mais rápida para visitar todos os clientes: `curl -X GET http://localhost:3000/customers/route`

**Screenshots:**
![image](https://github.com/paulorenan/customer-management/assets/85763550/6ab2bb2b-b4a1-451f-9dd8-9be681bcb4fe)
![image](https://github.com/paulorenan/customer-management/assets/85763550/a0e41d2b-a41e-46c4-9656-806fc6240aa8)



