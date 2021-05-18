# Backend do desafio final do bootcamp Fullstack do IGTI
Backend de aplicação de controle financeiro pessoal, desenvolvido para o frontend do desafio de conclusão do bootcamp Fullstack do IGTI.

## Overview
O backend foi desenvolvido em Node.js utilizando Express. O funcionamento de forma geral é bem simples, podendo cadastrar, editar ou deletar transações.

## Rotas
|Método|Rota|Parâmetros|Resposta|Descrição|
|---|---|---|---|---|
|GET|/|filter=yyyy/mm *|Array<Transações>|Rota para buscar transações dado um filtro obrigatório de ano e mês|
|PATCH|/|id *|Transação modificada|Rota para editar uma transação dado seu id|
|DELETE|/|id *||Rota para deletar uma transação dado seu id|
|POST|/|Nova transação em formato JSON no body da requisição|Nova transação|Rota para criar uma nova transação recebida via body da requisição em formato JSON|
|GET|/dates||Array<Datas>|Rota para obter todas as datas das transações, foi criada para criar um filtro dinâmico no frontend|
