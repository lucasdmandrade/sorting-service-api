# Projeto Sorting Service Api

## Iniciando

### 1. Clone o Repositório

Clone este repositório para o seu sistema e navegue até a pasta, executando o seguinte comando:

```
git clone https://github.com/lucasdmandrade/sorting-service-api
cd sorting-service-api
```

### 2. Inicialize com docker

Inicialize o servidor com o Docker executando o seguinte comando:

```
docker-compose up
```

Após essa etapa, basta fazer chamadas ao endpoint: `localhost:3000/sort`

> Além de iniciar o servidor, o Docker também executará os testes.

> Lembre-se de ter o ambiente Docker configurado.

> Para alterar os parâmetros de ordenação, você pode enviá-los no body das chamadas ou modificando o arquivo `sortingConfig.json`. Os parâmetros do arquivo serão utilizados caso não sejam fornecidos no corpo da requisição.

## Licença

Este projeto é distribuído sob a licença [MIT](LICENSE). Sinta-se à vontade para personalizar e usar conforme necessário.
