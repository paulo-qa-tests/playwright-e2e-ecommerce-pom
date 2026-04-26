class DashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Seletores: Lista de cards de produtos e botão do carrinho
    this.products = page.locator(".card-body");
    this.productsText = page.locator(".card-body b");
    this.cart = page.locator("[routerlink*='cart']");
  }

  // Procura um produto específico pelo nome e o adiciona ao carrinho
  async searchProductAndAddToCart(productName) {
    // Aguarda até que o texto do primeiro produto esteja visível
    await this.productsText.first().waitFor();

    // Filtra os cards para encontrar o que contém o nome do produto desejado
    const count = await this.products.count();
    for (let i = 0; i < count; ++i) {
      const text = await this.products.nth(i).locator("b").textContent();
      if (text === productName) {
        // Ao encontrar, clica no botão de adicionar
        await this.products.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
  }

  // Clica no ícone/link do carrinho para prosseguir
  // Clica no ícone/link do carrinho para prosseguir
  async navigateToCart() {
    // Garante que o botão do carrinho está visível na tela antes de tentar o clique
    await this.cart.waitFor({ state: 'visible' });

    // Tira qualquer dúvida e força o clique se houver um overlay (camada) por cima
    await this.cart.click();
  }
}
module.exports = { DashboardPage };