const fs = require('fs');
const util = require('util');
const path = require("path");
const inquirer = require('inquirer');

const genData = require("./lib/genData.js")
const description = require("./lib/description.js");
const textwalls = require("./lib/textwalls.js");
const credits = require("./lib/credits.js");
const licenseNBadges = require("./lib/licenseNBadges.js");
const generateMD = require("./lib/generateMD.js");

function welcomeMsg() {
  // Welcome message for README. just nice to have
  console.log(`
======= README Generator =======
WELCOME to the README.md Generator!
This generator will create an professional README.md from your input.
Don't worry! the Generator will walk you though every step.
Be sure to read & follow the directions for each section carefully.
In the end your README will be generated in the "output" folder.
Some edits to your README may have to be done manually,
computers are far from perfect after all!
`);
}

function farewellMsg() {
  // Farewell message. also just nice to have
  console.log(`
====== README Generated! ======
Your README.md has been generated!
You can find your README in the "output" folder.
If you included Placeholders, you will have to replace those Manually.
Thank you for using the generator!
  readme-generator by KILowrey on github
`);
}