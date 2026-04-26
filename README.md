🎭 Playwright E2E Automation - Ecommerce Flow

Este projeto de portfólio demonstra uma automação robusta de testes de ponta a ponta (E2E) aplicada a um fluxo real de e-commerce. A solução utiliza o padrão Page Object Model (POM) e está integrada a um pipeline de CI/CD profissional.
🎯 Escopo dos Testes

O script valida o "Caminho Feliz" completo de uma compra:

    🔐 Autenticação: Login seguro na plataforma.

    🛒 Dashboard: Seleção dinâmica de produtos por nome.

    📦 Carrinho: Verificação de persistência de itens.

    💳 Checkout: Preenchimento de dados de envio e finalização.

    📑 Orders: Validação do ID do pedido no histórico de ordens.

🏗️ Arquitetura do Projeto

Para garantir manutenibilidade e escalabilidade, o projeto segue o padrão POM (Page Object Model):

    pages/: Contém a lógica de mapeamento de elementos e ações das telas.

    tests/: Scripts de teste puramente comportamentais.

    .github/: Configuração do pipeline de integração contínua.

    Diferencial Técnico: O código foi refatorado para ser Case Sensitive, garantindo execução idêntica tanto em sistemas Windows quanto em ambientes Linux (CI/CD).

⚙️ Instalação e Configuração

Escolha o seu sistema operacional para preparar o ambiente local:
🪟 Windows (PowerShell / CMD)
PowerShell

# 1. Clonar o projeto

git clone https://github.com/paulo-qa-tests/playwright-e2e-ecommerce-pom.git
cd playwright-e2e-ecommerce-pom

# 2. Instalar dependências

npm install

# 3. Instalar navegadores do Playwright

npx playwright install

🐧 Linux (Ubuntu/Debian)
Bash

# 1. Clonar o projeto

git clone https://github.com/paulo-qa-tests/playwright-e2e-ecommerce-pom.git
cd playwright-e2e-ecommerce-pom

# 2. Instalar dependências e bibliotecas do sistema

npm install
sudo npx playwright install-deps
npx playwright install

🚀 Executando os Testes

Com o ambiente configurado, utilize os comandos abaixo:
Comando Descrição
npm test Executa todos os testes em modo Headless (background).
npm run test:headed Executa os testes com a interface do navegador visível.
npm run report Abre o relatório HTML detalhado da última execução.
🧪 CI/CD - GitHub Actions

O projeto conta com um workflow automatizado que é disparado a cada push ou pull_request.

    Ambiente: Ubuntu-latest.

    Relatórios: Gerados automaticamente e armazenados como artefatos no GitHub em caso de falhas, permitindo auditoria de vídeos e screenshots.

🛠️ Tecnologias Utilizadas

    💻 Playwright - Framework de automação.

    🟨 JavaScript - Linguagem de programação.

    🐙 GitHub Actions - Pipeline de CI/CD.

    📊 HTML Reporter - Visualização de resultados.

👤 Autor

Paulo Henrique Da Costa Barbosa
QA Automation Engineer em formação.

    LinkedIn: [Seu Link Aqui]

    Portfólio: Link do Repositório
