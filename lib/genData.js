const fs = require('fs');
const util = require('util');
const path = require("path");
const inquirer = require('inquirer');
const { Console } = require('console');

function collectGenData() {
  // Message explaining the section...
  console.log(`
=== General Data ===
FIRST we will be collecting General Data for the README.
Make sure that your answers are accurate.
Some parts of the README, such as links, are generated automatically.
So if you enter something wrong, you may have to go back and correct things
`);
// inquirer to collect the data
inquirer
  .prompt([
    {
      name: 'githubUser',
      message: 'What is your GitHub username? '
    },
    {
      name: 'email',
      message: 'What is your Email? '
    },
    {
      name: 'repoName',
      message: 'What is the Name of your Repository on GitHub? '
    },
    {
      name: 'projectTitle',
      message: 'What is the Title of your Project? '
    }
  ])
  .then((genData) => {
    saveGenData(genData);
  })
  .then(() => {
    Console.log("General Data Saved!");
  })
  .catch(function(error) {
    console.log("Oh no! Something went wrong!");
  });
}

function saveGenData(genData) {
  const githubUser = genData.githubUser;
  const email = genData.email;
  const repoName = genData.repoName;
  const projectTitle = genData.projectTitle;
}

module.exports = {
  // insert exports here
};