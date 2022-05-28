Feature('sendAMessage');

const assert = require('assert');

let contactData = new DataTable(['name', 'email','website','date']);
contactData.add(['davert', '','','May 26, 2022']);
contactData.add(['', '123456@gmail.com','','May 26, 2022']);


Scenario('test happy path', ({ I,contactPage }) => {
    I.amOnPage("/contact/");
    contactPage.submitMessage("abc","abc@gmail.com","https://www","May 26, 2022");
    I.seeElement(contactPage.goBackButton);
});

Data(contactData).Scenario('Verify that the fields “Name” and “Email” are required', ({ I, current, contactPage }) => {
    I.amOnPage("/contact/");
    contactPage.submitMessage(current.name,current.email,current.website,current.date);
    I.dontSeeElement(contactPage.goBackButton);
});

Scenario('Verify that the field “Website” is required to be a URL', async ({ I,contactPage }) => {
    I.amOnPage("/contact/");
    let attribute=  await I.grabAttributeFrom(contactPage.fields.website, 'type');
    console.log("input field type is:- "+attribute);
    assert.equal(attribute,"url");

});