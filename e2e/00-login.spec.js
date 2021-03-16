describe('Login Screen', ()=>{
  describe('Render', ()=>{
    beforeAll(async () => {
      await device.launchApp();
    });

    beforeEach(async () => {
      await device.reloadReactNative();
    });
    it('should have a email input', async()=>{
      await expect(element(by.id('email'))).toBeVisible();
    })

    it('should have a password input', async()=>{
      await expect(element(by.id('password'))).toBeVisible();
    })

    it('should have a login button', async()=>{
      await expect(element(by.id('login_button'))).toBeVisible();
    })
  })

  describe('Actions', () => {
    beforeAll(async () => {
      await device.launchApp();
    });

    beforeEach(async () => {
      await device.reloadReactNative();
    });


  it('should be navigate to list screen after login using button', async () => {
    await element(by.id('email')).typeText('email@email.com')
    await element(by.id('password')).typeText('password')
    await element(by.id('login_button')).tap();
    await expect(element(by.text('Lista de itens'))).toBeVisible();
  });

  it('should have a error mensagem after using login button with empty fields', async () => {
    await element(by.id('login_button')).tap();
    await expect(element(by.text('E-mail obrigatório'))).toBeVisible();
    await expect(element(by.text('Senha obrigatória'))).toBeVisible();
   });
  });
})
