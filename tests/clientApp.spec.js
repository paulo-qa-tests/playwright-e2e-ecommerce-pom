const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { CartPage } = require('../pages/CartPage');
const { OrdersPage } = require('../pages/OrdersPage');

test('@Web Client App - E2E Flow com Validação de Pedido', async ({ page }) => {
  // Instanciando todas as páginas
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const cartPage = new CartPage(page);
  const ordersPage = new OrdersPage(page);

  const email = "anshika@gmail.com";
  const productName = 'ZARA COAT 3';

  // Fluxo de Autenticação
  await loginPage.goTo();
  await loginPage.validLogin(email, "Iamking@000");

  // Fluxo de Seleção de Produto
  await dashboardPage.searchProductAndAddToCart(productName);
  await dashboardPage.navigateToCart();

  // Fluxo de Carrinho e Checkout
  await cartPage.verifyProductIsDisplayed(productName);
  await cartPage.checkout("India", email);

  // Captura do ID do pedido (Necessário para a próxima etapa)
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();

  // Fluxo de Validação de Histórico
  await ordersPage.navigateToOrders();
  const isOrderValid = await ordersPage.validateOrderHistory(orderId);

  // Asserção final: O pedido visualizado deve ser o mesmo que foi criado
  expect(isOrderValid).toBeTruthy();
});