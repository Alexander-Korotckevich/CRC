const fs = require('fs');
const path = require('path');
const COMPONENT_NAME = process.argv[2];

const PATH = path.join(path.resolve(__dirname), COMPONENT_NAME);

const COMPONENT_PATH = path.join(PATH, `${COMPONENT_NAME}.tsx`);
const COMPONENT_DATA = `\n\nexport function ${COMPONENT_NAME}() {\n  return (\n\n  );\n}`;

const REEXPORT_PATH = path.join(PATH, `index.ts`);
const REEXPORT_DATA = `export * from './${COMPONENT_NAME}';\n`;

const STYLES_PATH = path.join(PATH, `styles.ts`);
const STYLES_DATA = `import styled from 'styled-components';\n`;

fs.mkdir(PATH, {}, (err) => {
  if(err) {
    if(err.code === 'EEXIST') {
      console.error('The directory ' + PATH + ' already exists!');
    } else {
      console.error(err.message);
    }
    process.exit();
  }
  console.log('The directory ' + PATH + ' was created.');

  fs.writeFile(COMPONENT_PATH, COMPONENT_DATA, 'utf8', (err) => {
    if(err) {
      console.error(err.message);
    }
    console.log(`${COMPONENT_NAME}.tsx was created.`);
  });

  fs.writeFile(REEXPORT_PATH, REEXPORT_DATA, 'utf8', (err) => {
    if(err) {
      console.error(err.message);
    }
    console.log(`index.ts was created.`);
  });

  fs.writeFile(STYLES_PATH, STYLES_DATA, 'utf8', (err) => {
    if(err) {
      console.error(err.message);
    }
    console.log(`styles.ts was created.`);
  });
})
