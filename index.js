#!/usr/bin/env node

const chalk = require("chalk");
const fs = require('fs');
const path = require('path');
const getStyles = require('./utils/getStyles');

const ERROR = chalk.bold.red;
const SUCCESS = chalk.bold.green;

const COMPONENT_NAME = process.argv[2] || "Component";
const PATH_ARG = process.argv[3] || './src/components';
const STYLES_FLAG = process.argv[4] || '--styled';
const [stylesFileName, stylesData, componentImportData] = getStyles(COMPONENT_NAME, STYLES_FLAG);

const PATH = path.resolve(path.join(process.cwd(), PATH_ARG, COMPONENT_NAME));
const COMPONENT_PATH = path.join(PATH, `${COMPONENT_NAME}.tsx`);
const COMPONENT_DATA = `${componentImportData}\n\nexport function ${COMPONENT_NAME}() {\n  return (\n\n  );\n}`;

const REEXPORT_PATH = path.join(PATH, `index.ts`);
const REEXPORT_DATA = `export * from './${COMPONENT_NAME}';\n`;

const STYLES_PATH = path.join(PATH, stylesFileName);
const STYLES_DATA = stylesData;


fs.mkdir(PATH, {}, async (err) => {
  if(err) {
    if(err.code === 'EEXIST') {
      console.error(ERROR('The directory ' + PATH + ' already exists!'));
    } else if(err.code === 'ENOENT') {
      console.error(ERROR('The directory ' + PATH + ' not found'));
    } else {
      console.error(ERROR(err.message));
    }
    process.exit();
  }
  console.log(SUCCESS('The directory ' + PATH + ' was created.'));

  fs.writeFile(COMPONENT_PATH, COMPONENT_DATA, 'utf8', (err) => {
    if(err) {
      console.error(ERROR(err.message));
    }
    console.log(SUCCESS(`${COMPONENT_NAME}.tsx was created.`));
  });

  fs.writeFile(REEXPORT_PATH, REEXPORT_DATA, 'utf8', (err) => {
    if(err) {
      console.error(ERROR(err.message));
    }
    console.log(SUCCESS(`index.ts was created.`));
  });

  fs.writeFile(STYLES_PATH, STYLES_DATA, 'utf8', (err) => {
    if(err) {
      console.error(ERROR(err.message));
    }
    console.log(SUCCESS(`${stylesFileName} was created.`));
  });
})
