const isDisplayed = require("webdriverio/build/commands/element/isDisplayed");
const { I } = inject();

module.exports = {

    submit:".contact-submit > button",
    fields:{
        name:'#g7-name',
        email:'#g7-email',
        website:'#g7-website',
        date:'#g7-date'
    },
    goBackButton:"//a[contains(text(),'go back')]",

    submitMessage(name,email,website,date){
       I.fillField(this.fields.name,name);
       I.fillField(this.fields.email,email)
        I.fillField(this.fields.website,website);
       I.fillField(this.fields.date,date)
       I.forceClick(this.submit);
    }
}
