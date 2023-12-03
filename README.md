# Projeto Sorting Service Api

## Iniciando

### 1. Clone o Repositório

Clone este repositório para o seu sistema e navegue para a pasta executando o seguinte comando:

```
git clone https://github.com/lucasdmandrade/sorting-service-api
cd sorting-service-api
```

### 2. Inicialize o com docker

Após esse passo basta fazer chamadas ao endpoint que estará rodando localmente como `http://localhost:3000/sort`

```
docker-compose up
```

> Lembre-se de ter o ambiente docker configurado
> Para alterar os parametros de ordenação é possivel mandar como options nas chamas ou alterando o arquivo `sortingConfig.json`

### 3. Instale as Dependências

> Opcional caso deseje rodar os testes ou fazer alterações locais

Instale as dependências do projeto executando:

```
npm install
```

#### ou com Yarn

```
yarn
```

### 4. Testes

Criei comandos para simplificar o processo de execução dos testes. Para rodar os testes, basta executar os seguintes comandos:

```
yarn test
```

## Licença

Este projeto é distribuído sob a licença [MIT](LICENSE). Sinta-se à vontade para personalizar e usar conforme necessário.

---

Este README serve como um guia detalhado para executar este projeto. Para obter informações adicionais sobre configuração e uso, consulte a documentação oficial do Expo e das bibliotecas relevantes.

---
