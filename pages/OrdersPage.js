class OrdersPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Seletores: Botão de ordens, linhas da tabela e ID nos detalhes
    this.ordersButton = page.locator("button[routerlink*='myorders']");
    this.ordersTableBody = page.locator("tbody");
    this.orderRows = page.locator("tbody tr");
    this.orderIdDetails = page.locator(".col-text");
  }

  // Navega para a página de histórico de pedidos
  async navigateToOrders() {
    await this.ordersButton.click();
    await this.ordersTableBody.waitFor();
  }

  // Busca o pedido na tabela e clica em "View" para ver os detalhes
  async validateOrderHistory(orderId) {
    const count = await this.orderRows.count();

    for (let i = 0; i < count; ++i) {
      // Captura o texto da coluna de ID na linha atual
      const rowOrderId = await this.orderRows.nth(i).locator("th").textContent();

      // Verifica se o ID gerado no checkout está contido nesta linha
      if (orderId.includes(rowOrderId)) {
        // Clica no primeiro botão (View) daquela linha específica
        await this.orderRows.nth(i).locator("button").first().click();
        break;
      }
    }

    // Valida se o ID exibido na página de detalhes é o mesmo do pedido
    const detailsId = await this.orderIdDetails.textContent();
    return orderId.includes(detailsId);
  }
}
module.exports = { OrdersPage };