const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: "https://bluescapeqainterview.wordpress.com",
      browser: 'chrome',
      windowSize: 'maximize',
      smartWait : 3000,
    }
  },
  include: {
    I: './steps_file.js',
    contactPage:'./pages/contact.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptwdio',
  plugins:{
    wdio: {enabled: true,
          services: ['selenium-standalone']
    }
  }
}