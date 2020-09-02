const fs = require('fs');
const util = require('util');
const path = require("path");
const inquirer = require('inquirer');

const genData = require("./genData.js")

function createCredits() {
  console.log(`
=== Credits ===
Now, you will create the Credits section.
(remember that this can be updated later)
You will be adding the credits one by one.
First, is the who/what/when/where/why/how,
Then, is the link to the resource.
`);
  function askAddCredit() {
    const addCredit = inquirer.prompt ({
      name: 'addCredit',
      message: 'Would you like to add a credit? ',
      type: 'confirm'
    });
    return addCredit;
  }
  function askCreditQs() {
    inquirer
      .prompt([
        {
          name: 'creditWs',
          message: 'What are you crediting? Who did it? Why and Where did you use it? '
        },
        {
          name: 'creditLink',
          message: 'Link to the thing you\'re crediting: '
        }
      ])
      .then((saveCredit) => {
        const creditWs = saveCredit.creditWs;
        const creditLink = saveCredit.creditLink;
        return ` * [${creditWs}](${creditLink})`;
      })
  }
  const creditArray = [];
  for (i = 0; i = 0; ) {
    askAddCredit();
    if (addCredit === 'true') {
      askCreditQs();
      saveCredit.push(creditArray);
    } else {
      i++;
      return `${creditArray.join('\n')}`;
    }
  }
}

module.exports = {
  // insert exports here
};