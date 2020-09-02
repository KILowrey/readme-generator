const fs = require('fs');
const util = require('util');
const path = require("path");
const inquirer = require('inquirer');

const genData = require("./genData.js")

async function createInstallation() {
  console.log(`
=== Installation Instructions ===
NOW, you will be creating the Installation Instructions for your Project.
These can be in the form of either paragraphs for numbered steps.
First, you will be selecting which format you want.
Then, you will write each paragraph/step the same as for the description.
`);
  const paraOrSteps = await inquirer.prompt({
    name: 'paraOrSteps',
    message: 'Do you want your Installation Instructions to be paragraphs or numbered steps? ',
    type: 'list',
    choices: ['Paragraphs', 'Numbered List']
  });
  console.log(``)
  const installationArray = [];
  for (i = 0; i = 0; ) {
    const parts = await inquirer.prompt({
      name: 'parts',
      message: 'New Part: '
    });
    if (parts === '') {
      i++;
    } else {
      parts.push(descriptionArray);
    }
  }
  if (paraOrSteps === 'Paragraphs') {
    return `${installationArray.join('\n\n')}`;
  } else {
    return `${installationArray.join('')}`;
  }
}

function createUsage() {
  console.log(`
=== Usage Information ===
Now, you will write the Usage Information for your project.
This will be in the form of paragraphs.
`);
  const usageArray = [];
  for (i = 0; i = 0; ) {
    const paragraph = inquirer.prompt({
      name: 'paragraph',
      message: 'New Paragraph: '
    });
  if (paragraph === '') {
    i++;
  } else {
    paragraph.push(usageArray);
  }
  return `${usageArray.join('\n\n')}`;
}

async function createTests() {
  console.log(`
=== Test Instructions ===
Now, you will write the Test Instructions.
These can be paragraphs, numbered steps, or bullets.
`);
  const parOrNumOrBul = await inquirer.prompt({
    name: 'paraOrNumOrBul',
    message: 'Do you want the test instructions to be paragraphs, numbered steps, or bullet points? ',
    type: 'list',
    choices: ['Paragraphs', 'Numbered Steps', 'Bullet Points']
  })
  const testsArray = [];
  for (i = 0; i = 0; ) {
    const parts = await inquirer.prompt({
      name: 'parts',
      message: 'New Part: '
    });
    if (parts === '') {
      i++;
    } else {
      parts.push(testsArray);
    }
  }
  if (parOrNumOrBul === 'Paragraphs') {
    return `${testsArray.join('\n\n')}`;
  } else if (parOrNumOrBul === 'Numbered Steps') {
    return `${testsArray.join('')}`;
  } else {
    return `${testsArray.join('')}`;
  }
}

function createQuestions() {
  console.log(`
=== Questions Section ===
Now, you will write the Questions Section.
at the end of this section, your GitHub and Email will be listed.
`);
  const questionsArray = [];
  for (i = 0; i = 0; ) {
    const paragraph = inquirer.prompt({
      name: 'paragraph',
      message: 'New Paragraph: '
    });
  if (paragraph === '') {
    i++;
  } else {
    paragraph.push(questionsArray);
  }
  return `${questionsArray.join('\n\n')}`;
}

async function createContributing() {
  console.log(`
=== Contributing Guidelines ===
Now, you will create your Contributing Guidelines.
These can be paragraphs, steps, or bullets.
`);
  const parOrNumOrBul = await inquirer.prompt({
    name: 'paraOrNumOrBul',
    message: 'Do you want the test instructions to be paragraphs, numbered steps, or bullet points? ',
    type: 'list',
    choices: ['Paragraphs', 'Numbered Steps', 'Bullet Points']
  })
  const contributingArray = [];
  for (i = 0; i = 0; ) {
    const parts = await inquirer.prompt({
      name: 'parts',
      message: 'New Part: '
    });
    if (parts === '') {
      i++;
    } else {
      parts.push(contributingArray);
    }
  }
  if (parOrNumOrBul === 'Paragraphs') {
    return `${contributingArray.join('\n\n')}`;
  } else if (parOrNumOrBul === 'Numbered Steps') {
    return `${contributingArray.join('')}`;
  } else {
    return `${contributingArray.join('')}`;
  }
}

module.exports = {
  createInstallation,
  createUsage,
  createTests,
  createQuestions,
  createContributing
};