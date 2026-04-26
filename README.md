# 🎭 Playwright E2E Automation - Ecommerce Flow

![Playwright Tests](https://github.com/paulo-qa-tests/playwright-e2e-ecommerce-pom/actions/workflows/playwright.yml/badge.svg)
![Playwright Version](https://img.shields.io/badge/playwright-v1.43+-2e8b57)
![Node Version](https://img.shields.io/badge/node-v18+-339933)

Este projeto apresenta a automação de testes de ponta a ponta (E2E) para um fluxo completo de compra em uma plataforma de e-commerce. O objetivo principal é demonstrar a aplicação de padrões de design modernos e boas práticas de engenharia de QA para garantir a qualidade e estabilidade do software.

---

## 🎯 Objetivo do Teste

Validar o fluxo crítico de negócio, incluindo:

1. **Autenticação:** Login com credenciais válidas.
2. **Catálogo:** Busca e seleção de produtos específicos.
3. **Carrinho:** Persistência de itens e validação de valores.
4. **Checkout:** Processo de finalização com seleção dinâmica de país.
5. **Histórico:** Validação de que o pedido foi corretamente registrado no banco de dados através da interface de pedidos.

---

## 🏗️ Arquitetura e Padrões de Projeto

### Page Object Model (POM)

O projeto utiliza o padrão **POM** para separar a lógica de interação com os elementos da interface da lógica dos testes. Isso garante:

- **Manutenibilidade:** Se um seletor mudar, alteramos em apenas um lugar.
- **Reutilização:** Métodos de login e navegação são compartilhados entre diferentes suítes.
- **Legibilidade:** Os testes são escritos de forma declarativa, focando no "o quê" e não no "como".

### Estrutura de Pastas

```text
├── .github/workflows/   # Pipeline de CI/CD (GitHub Actions)
├── pages/               # Classes Page Objects (Seletores e Ações)
├── tests/               # Scripts de teste (Spec files)
├── playwright.config.js # Configurações globais e Cross-browser
└── .gitignore           # Exclusão de arquivos sensíveis e pesados

🛠️ Tecnologias e Ferramentas

    Playwright: Framework principal para automação.

    JavaScript: Linguagem de scripting.

    GitHub Actions: Execução automatizada em cada Push ou Pull Request.

    Múltiplos Navegadores: Testes configurados para Chromium, Firefox, Chrome.


    🪟 Windows (PowerShell / CMD)

    # 1. Clonar o projeto
         git clone https://github.com/paulo-qa-tests/playwright-e2e-ecommerce-pom.git

         acessar o diretório
         cd playwright-e2e-ecommerce-pom

    # 2. Instalar dependências
         npm install

    # 3. Instalar navegadores do Playwright
         npx playwright install


    🐧 Linux (Ubuntu/Debian)
    # 1. Clonar o projeto
         git clone https://github.com/paulo-qa-tests/playwright-e2e-ecommerce-pom.git

         acessar o diretório
         cd playwright-e2e-ecommerce-pom

    # 2. Instalar dependências e bibliotecas do sistema
        sudo npm install
        sudo npx playwright install-deps
        npx playwright install



   🚀 Executando os Testes

  Com o ambiente configurado, utilize os comandos abaixo:
  Comando	Descrição

    npx playwright test --headed

    npx playwright show-report

⚙️ CI/CD (Continuous Integration)

Este projeto possui uma pipeline configurada via GitHub Actions que:

    Valida o código em um ambiente Linux limpo.

    Executa os testes em múltiplos navegadores simultaneamente.

    Gera e armazena artefatos (relatórios e evidências) em caso de falha.

    ---

## 📊 Evidências de Execução

Abaixo, a demonstração da execução bem-sucedida da suíte de testes em ambiente local e os resultados gerados pelo Playwright Reporter.

### ✅ Testes Passando (Local & CI/CD)

https://raw.githubusercontent.com/paulo-qa-tests/playwright-e2e-ecommerce-pom/main/assets/test-success.png

https://github.com/paulo-qa-tests/playwright-e2e-ecommerce-pom/blob/main/assets/report-demo.png

👤 Autor

Paulo Henrique Da Costa Barbosa QA Engineer em formação | Automação e Qualidade de Software.
```
