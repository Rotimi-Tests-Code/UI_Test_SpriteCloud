module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //AI Implementation
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-feautures=AutofillServerCommunicaiton,PasswordManagerEnforcement');
        }
        return launchOptions;
      });
      return config;
      
      // implement node event listeners here
    },
  
  },
});