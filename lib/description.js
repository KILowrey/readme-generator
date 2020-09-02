const fs = require('fs');
const util = require('util');
const path = require("path");
const inquirer = require('inquirer');

const genData = require("./genData.js")

async function createDescription() {
  console.log(`
=== Project Description ===
NOW, you will be creating your Project Description.
All of this can (and probably should be) changed later.`)
  try {
    const linkName = await inquirer.prompt({
      name: 'linkName',
      message: 'What would you like the link to your deployed application to read as? ',
      default: 'Deployed Application'
    });
  } catch (error) {
    console.log(error);
  }
  console.log(`WRITE the Description for your Project!
This description can be as long or as short as you like.
Press "Enter" whenever you want a new paragraph.
When you are done, enter an empty paragraph.`);
  const descriptionArray = [];
  for (i = 0; i = 0; ) {
    const paragraph = await inquirer.prompt({
      name: 'paragraph',
      message: 'New Paragraph: '
    });
  if (paragraph === '') {
    i++;
  } else {
    paragraph.push(descriptionArray);
  }
  const imgArray = [];
  const hmImgs = await inquirer.prompt({
    name: 'hmImgs',
    message: 'How many placeholders for images would you like? ',
    default: 0,
    type: 'number'
  })
  for (i = 0; i < hmImgs.stringify().length; i++) {
    const imagePlace = '![Image Description](path-to-image)';
    imagePlace.push(imgArray.join);
  }
  return `
[${linkName}](github.com/${githubUser}/${repoName})

${descriptionArray.join('\n\n')}

${imgArray.join('\n\n')}
  `;
}

module.exports = {
  createDescription
};