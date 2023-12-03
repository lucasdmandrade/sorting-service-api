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

> Além de iniciar o servidor, o Docker também executará os testes.

Após essa etapa, basta fazer chamadas ao endpoint que estará rodando localmente em `http://localhost:3000/sort`.

> Lembre-se de ter o ambiente Docker configurado.
> Para alterar os parâmetros de ordenação, você pode enviá-los como opções nas chamadas ou modificando o arquivo `sortingConfig.json`.

## Licença

Este projeto é distribuído sob a licença [MIT](LICENSE). Sinta-se à vontade para personalizar e usar conforme necessário.
