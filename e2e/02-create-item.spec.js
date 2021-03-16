describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
    await element(by.id('email')).typeText('email@email.com')
    await element(by.id('password')).typeText('password')
    await element(by.id('login_button')).tap();
    await element(by.id('new-create-item')).tap();
  });

  it('should have screen to create a new item', async () => {
    await expect(element(by.text('Criar um Novo Item'))).toBeVisible();
    await element(by.id('title-input'))
    await element(by.id('description-input'))
  });

  it('should be able to create a new item', async()=>{
    await element(by.id('title-input')).typeText('Title Teste')
    await element(by.id('description-input')).typeText('Description teste')
    await element(by.id('handle-submit-new-item')).tap();
    await expect(element(by.text('Parabéns'))).toBeVisible();
    await expect(element(by.text('Seu item foi criado com sucesso!'))).toBeVisible();
    await expect(element(by.text('Ok!'))).toBeVisible();
  })
});
