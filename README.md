# Tabela Completa do Campeonato Brasileiro Feminino de Futebol

Este projeto tem como objetivo criar uma aplicação que permite gerenciar e exibir a tabela completa do Campeonato Brasileiro Feminino de Futebol. A aplicação oferece funcionalidades para retornar informações sobre os times, realizar filtros, efetuar validações de login e senha, listar e filtrar partidas finalizadas e em andamento, atualizar o status das partidas e criar novas partidas.

## Tecnologias Utilizadas
- Banco de Dados: MySQL
- ORM (Object-Relational Mapping): Sequelize
- Docker
- Linguagem de Programação: TypeScript
- Node.js
- Framework: Express
- Validação de Dados: Joi
- Arquitetura: Camada MVC (Model-View-Controller)
- Autenticação: JWT (JSON Web Tokens)
- Princípios de Projeto: SOLID (SRP, OCP, LSP, ISP, DIP)

## Funcionalidades Principais

A aplicação oferece as seguintes funcionalidades principais:

### 1. Retornar todos os times

- A aplicação permite visualizar todos os times participantes do campeonato.

### 2. Retornar um time através de um filtro

- É possível filtrar os times com base em critérios específicos, como nome, pontuação ou posição na tabela.

### 3. Validações de login e senha

- A aplicação implementa um sistema de autenticação que verifica a validade do login e senha fornecidos pelos usuários.

### 4. Listar partidas finalizadas e em andamento

- É possível listar todas as partidas finalizadas e em andamento do campeonato, exibindo os gols marcados pelo time da casa e pelo time visitante.

### 5. Atualizar o status das partidas

- Os administradores da aplicação têm a opção de alterar o status de uma partida de "em andamento" para "finalizada" quando o jogo for encerrado.

### 6. Criar uma nova partida

- Os administradores podem adicionar uma nova partida ao sistema, informando os times envolvidos e a data de realização do jogo.

### 7. Listar a tabela completa

- A aplicação exibe a tabela completa do campeonato, contendo as informações de cada time, incluindo nome, pontos, jogos, vitórias, empates, derrotas, gols marcados, gols sofridos, saldo de gols e aproveitamento.

### Regra de Classificação dos Times

Os times são classificados de forma ascendente seguindo o seguinte critério:

1. Pontos
2. Jogos
3. Vitórias
4. Empates
5. Derrotas
6. Gols Marcados
7. Gols Sofridos
8. Saldo de Gols
9. Aproveitamento

## Como utilizar a aplicação

1. Clone o repositório para o seu ambiente local.
2. Certifique-se de ter os requisitos necessários instalados (listados no arquivo `requirements.txt`).
3. Configure as credenciais do banco de dados (se aplicável).
4. Execute o aplicativo e acesse a interface.
5. Realize o login utilizando suas credenciais.
6. Explore as funcionalidades disponíveis na aplicação para visualizar e gerenciar as informações do campeonato.

## Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar a aplicação.