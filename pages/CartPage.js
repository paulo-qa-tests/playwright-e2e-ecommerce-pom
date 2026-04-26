const { expect } = require('@playwright/test');

class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Seletores: Itens do carrinho e botões de finalização
    this.cartList = page.locator("div li");
    this.checkoutButton = page.locator("text=Checkout");
    this.countryInput = page.getByPlaceholder('Select Country');
    this.dropdownResults = page.locator(".ta-results");
    this.submitButton = page.locator(".action__submit");
  }

  // Verifica se o produto está visível no carrinho
  async verifyProductIsDisplayed(productName) {
    await this.cartList.first().waitFor();
    const isVisible = await this.page.locator(`h3:has-text('${productName}')`).isVisible();
    expect(isVisible).toBeTruthy(); // Asserção de segurança
  }

  // Fluxo de checkout: seleciona país e confirma pedido
  async checkout(countryName, email) {
    await this.checkoutButton.click();
    // Digita pausadamente para ativar o auto-complete do campo
    await this.countryInput.pressSequentially(countryName, { delay: 150 });
    await this.dropdownResults.waitFor();

    // Seleciona o país correto na lista de resultados
    const optionsCount = await this.dropdownResults.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
      const text = await this.dropdownResults.locator("button").nth(i).textContent();
      if (text.trim() === countryName) {
        await this.dropdownResults.locator("button").nth(i).click();
        break;
      }
    }

    // Valida se o email do usuário aparece corretamente no resumo
    await expect(this.page.locator(".user__name [type='text']").first()).toHaveText(email);
    await this.submitButton.click();
  }
}
module.exports = { CartPage };