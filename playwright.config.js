// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests', // Onde o Playwright vai buscar os testes

  /* Execução em paralelo para ganhar velocidade */
  fullyParallel: true,

  /* Falha o build no CI se você esquecer um 'test.only' no código */
  forbidOnly: !!process.env.CI,

  /* Número de tentativas em caso de falha (ajuda em testes instáveis) */
  retries: process.env.CI ? 2 : 0,

  /* Número de workers (processos) rodando simultaneamente */
  workers: process.env.CI ? 1 : undefined,

  /* Repórter de teste: 'html' gera um site completo com os resultados */
  reporter: 'html',

  /* Configurações compartilhadas para todos os projetos abaixo */
  use: {
    /* URL base para não precisar repetir em todos os testes */
    baseURL: 'https://rahulshettyacademy.com/client',

    /* Coleta rastreamento (trace) em caso de falha para debug */
    trace: 'on-first-retry',

    /* Tira print automaticamente quando um teste falha */
    screenshot: 'only-on-failure',

    /* Grava vídeo apenas em caso de falha */
    video: 'retain-on-failure',
  },

  /* Configuração de múltiplos navegadores (Cross-browser) */
  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],
});
