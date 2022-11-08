# DESAFIO-BACKEND-STONE

## Objetivo
Microservico reponsavel pela criacao, edicao e busca de clientes.

## Pre requisitos
```
*   NodeJs 16
*   Vault
```

## Build, execução local e testes
* Preparando bibliotecas:
```
npm install
```
* Build simples:
```
npm run build
```
* Execução local:
```
Windows:
npm run local:windows
Linux:
npm run local:linux
```
* Executar testes unitários:
```
npm run test
```
* Executar arquivo específicos de teste:
```
npm run test:math "Test delete debtor"
```

## Verificando code coverage
* Executar os testes unitários: 
```
npm run test:coverage
```
Para verificar visualmente o relatório de coverage, abrir o aquivo /coverage/lcov-report/index.html


## URL's
* POST - /api/v1/debt
* GET - /api/v1/debt/types
* GET - /api/v1/debt/debtor/{idDebtor}
* GET - /api/v1/debt/parent/debtor/{idDebtor}
* DELETE - /api/v1/debt/parent/{idGeneric}
* GET - /api/v1/debt/child?size={}&page={}&idGeneric={}
* POST - /api/v1/debt/
* GET - /api/v1/debt?idDebtor={}&minValueDebt={}&maxValueDebt={}&minFinalDateDebt={}&maxFinalDateDebt={}&size={}&page={}&sortBy={}
* DELETE - /api/v1/debt
* GET - /api/v1/debt/{idDebt}
* POST - /api/v1/file/upload-url
* GET - /api/v1/file/{idFile}
* GET - /api/v1/debtor/doc/{CPF/CNPJ}
* GET - /api/v1/debtor/{id}
* GET - /api/v1/debtor?page={}&size={}&name={}&typeDoc={}&doc={}&minValueDebt={}&maxValueDebt={}&minFinalDateDebt={}&maxFinalDateDebt={}
* PATCH - /api/v1/debtor/{id}
* DELETE - /api/v1/debtor/{id}
* GET - /api/v1

## Integrações
* API OAuth2
* Vault
* Aws

## Versão
* 1.0.0