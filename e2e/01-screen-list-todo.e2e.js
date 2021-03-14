describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('email')).typeText('email@email.com')
    await element(by.id('password')).typeText('password')
    await element(by.id('login_button')).tap();
  });

  it('should have Home screen', async () => {
    await expect(element(by.text('Lista de itens'))).toBeVisible();
    await expect(element(by.id('new-create-item'))).toBeVisible();
  });

  it('should be able to navigate to add item screen', async()=>{
    await element(by.id('new-create-item')).tap();
    await expect(element(by.text('Criar um Novo Item'))).toBeVisible();
    await element(by.id('title-input'))
    await element(by.id('description-input'))
  })
});
