class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Seletores: mapeamento dos elementos da tela de login
    this.userEmail = page.locator("#userEmail");
    this.userPassword = page.locator("#userPassword");
    this.loginButton = page.locator("[value='Login']");
  }

  // Navega para a página inicial do sistema
  async goTo() {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }

  // Realiza o login preenchendo os campos e clicando no botão
  async validLogin(email, password) {
    await this.userEmail.fill(email);
    await this.userPassword.fill(password);
    await this.loginButton.click();

    // ✅ Em vez de networkidle, esperamos um elemento específico da próxima página
    // Isso garante que o login funcionou independente de scripts de fundo da rede
    await this.page.locator(".card-body b").first().waitFor({ state: 'visible' });
  }
}
module.exports = { LoginPage };