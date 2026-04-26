&lt;contexto&gt;
Você é um Engenheiro de QA junior especialista em automação de testes com Playwright, com 2+ anos de experiência em e-commerce e frameworks de teste modernos. Você domina Page Object Model, data-driven testing, CI/CD integration e relatórios executivos para stakeholders técnicos e de negócio.
&lt;/contexto&gt;

&lt;tarefa&gt;
Construa um projeto completo de automação de testes end-to-end (E2E) para o site de e-commerce "Rahul Shetty Academy", cobrindo os 3 cenários mais solicitados em processos seletivos de QA. O projeto deve ser entregue do zero até a execução em CI/CD, com código executável, arquitetura profissional e documentação completa.
&lt;/tarefa&gt;

&lt;ambiente_tecnico&gt;

- URL Base: https://rahulshettyacademy.com/client/#/auth/login
- Credenciais Válidas:
  - Email: sari8922@uorak.com
  - Senha: Senha123
- Framework: Playwright com TypeScript
- Padrão: Page Object Model (POM) + Fixtures
- Relatório: HTML Report + Allure Report
- CI/CD: GitHub Actions
  &lt;/ambiente_tecnico&gt;

&lt;cenarios_obrigatorios&gt;

1. **Fluxo de Login e Autenticação**
   - Login com credenciais válidas
   - Validação de redirecionamento para dashboard
   - Persistência de sessão (storage state)
   - Logout e limpeza de sessão

2. **Fluxo de Compra End-to-End**
   - Login → Navegação por categorias → Adicionar produto ao carrinho
   - Checkout completo (endereço, pagamento mockado)
   - Validação de confirmação de pedido
   - Verificação de histórico de pedidos

3. **Gestão de Carrinho e Validações de Negócio**
   - Adicionar múltiplos produtos
   - Alterar quantidades
   - Remover itens
   - Validar cálculos de preço/subtotal
   - Testar estoque indisponível
     &lt;/cenarios_obrigatorios&gt;

&lt;estrutura_entrega&gt;

1. **Setup Inicial (Step-by-Step)**
   - Estrutura de pastas profissional
   - package.json com dependências
   - playwright.config.ts otimizado (workers, retries, projetos multi-browser)
   - tsconfig.json

2. **Arquitetura de Automação**
   - BasePage (métodos genéricos: waitForElement, click, fill, getText, isVisible)
   - LoginPage, DashboardPage, ProductPage, CartPage, CheckoutPage
   - Fixtures customizadas para setup/teardown
   - Utils: Data generators, API helpers, Constants

3. **Implementação dos 3 Cenários**
   - Arquivos .spec.ts para cada cenário
   - Data-driven tests (JSON/CSV com múltiplos datasets)
   - Tags para smoke, regression, critical
   - Screenshots em falhas + vídeos + traces

4. **Relatórios e Métricas**
   - Configuração HTML Report
   - Integração Allure Report com histórico
   - Métricas de cobertura e tempo de execução

5. **CI/CD Pipeline**
   - GitHub Actions workflow (.github/workflows/playwright.yml)
   - Execução em 3 navegadores (Chromium, Firefox, WebKit)
   - Parallel execution com sharding
   - Upload de artefatos (reports, screenshots, traces)
   - Notificação de falhas

6. **Documentação Executiva**
   - README.md com instruções de instalação e execução
   - Arquitetura Decision Record (ADR)
   - Guia de contribuição
   - Troubleshooting guide
     &lt;/estrutura_entrega&gt;

&lt;requisitos_tecnicos&gt;

- Uso de locators resilientes (role, text, test-id) - evitar XPath frágil
- Esperas explícitas inteligentes (waitForLoadState, waitForResponse)
- Handling de iframes, popups e elementos dinâmicos
- API mocking para pagamento (route.fulfill)
- Environment configuration (.env para URLs e credenciais)
- Retry logic para flaky tests (configurar no playwright.config.ts)
- Parallel execution com isolation completo (contextos independentes)
  &lt;/requisitos_tecnicos&gt;

&lt;formato_saida&gt;
Entregue em seções numeradas, com:

- Código completo em blocos TypeScript (syntax highlighting)
- Explicação técnica antes de cada bloco de código
- Comandos de terminal para execução
- Checklist de validação antes de ir para produção
- Badge de status para CI/CD

Use XML tags internas para organizar sub-seções quando necessário (ex: &lt;setup&gt;, &lt;page_objects&gt;, &lt;tests&gt;, &lt;ci_cd&gt;).
&lt;/formato_saida&gt;

&lt;exemplo_execucao&gt;
Exemplo de como deve funcionar após clonar o projeto:

```bash
npm install
npx playwright install
npm run test:smoke    # Executa apenas cenários críticos
npm run test:regression  # Suite completa
npm run report:allure  # Abre relatório Allure
```