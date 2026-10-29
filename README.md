# Suíte de testes E2E – Playwright

Suíte automatizada com **Playwright + TypeScript** aplicada ao site oficial do Playwright (https://playwright.dev) e a uma página publica para teste de login (https://the-internet.herokuapp.com/login).

## Implementações nesta suite

- Testes paralelos: Automaticamente o Playwright cria Treads de acordo com a capacidade de processamento do computador que executa os testes
- Navegadores suportados: Cada teste é executado nos navegadores Chromium (Google Chrome e Microsoft Edge), Firefox e WebKit (Safari).
- Evidências dos testes (Screenshots): as capturas de tela são geradas apenas para os testes que apresentarem falha.


## Pré-requisitos

- Git
- Node.js LTS 24.11.0
- Yarn
- Visual Studio Code (opcional, mas recomendado)

## 1. Validar Instalações

No PowerShell, CMD  ou ou Bash execute:

```bash
git --version
node --version
yarn --version
```

Resultado esperado:

```text
git version x.x.x
v24.11.0
x.x.x
```

## 2. Instalar o Yarn

Caso o Yarn ainda não esteja instalado:

```bash
npm install -g yarn
```

Validar a instalação:

```bash
yarn --version
```

## 3. Clonar o Repositório

```bash
git clone https://github.com/fabio-de-matos/playwright-desafio.git
```

Acessar a pasta em que o projeto será clonado e aplique o comando do Git descrito acima:

```bash
cd SEU-REPOSITORIO
git clone https://github.com/fabio-de-matos/playwright-desafio.git
```

## 4. Instalar Dependências

Instalar todas as dependências do projeto:

```bash
yarn install
```

ou

```bash
yarn
```

## 5. Versões Utilizadas no Projeto

```json
{
  "@playwright/test": "^1.64.1",
  "@types/node": "^26.6.6"
}
```

Validar as versões instaladas:

```bash
yarn list --pattern "@playwright/test"
yarn list --pattern "@types/node"
```

## 6. Instalar os Navegadores do Playwright

Instalar todos os navegadores suportados:

```bash
yarn playwright install
```

Instalar apenas o Chromium:

```bash
yarn playwright install chromium
```

Instalar navegadores e dependências adicionais:

```bash
yarn playwright install --with-deps
```

## 7. Validar a Instalação do Playwright

```bash
yarn playwright --version
```

Resultado esperado:

```text
Version 1.64.1
```

## 8. Executar os Testes

Executar todos os testes:

```bash
yarn playwright test
```

Executar todos os testes em modo visual (headed):

```bash
yarn playwright test --headed
```

Executar uma suite específica:

```bash
yarn playwright test tests/altoContraste.spec.ts
yarn playwright test tests/fluxosNegativos.spec.ts
yarn playwright test tests/fluxosPositivos.spec.ts
```

Executar um teste específico pelo título:

```bash
yarn playwright test -g "CT-1 Validar carregamento da página inicial"
```

Executar testes passo a passo (Debug) 

```bash
yarn playwright test --debug
```

## 9. Visualizar o Relatório

Após a execução dos testes:

```bash
yarn playwright show-report
```

O relatório será aberto automaticamente no navegador.

## 10. Estrutura Básica do Projeto

```text
├── playwright-report
├── test-results
├── tests/
│   ├── altoContraste.spec.ts
│   ├── fluxosNegativos.spec.ts
│   └── fluxosPositivos.spec.ts
├── package.json
├── playwright.config.ts
├── README.md
└── yarn.lock
```