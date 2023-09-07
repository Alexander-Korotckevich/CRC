const chalk = require("chalk");

const getStyles = (componentName, stylesFlag) => {
  let stylesFileName = 'styles.ts';
  let stylesData = '';
  let componentImportData = '';

  switch (stylesFlag) {
    case '--sass':
      stylesFileName = componentName.toLowerCase() + '.module.sass';
      componentImportData = `import styles from './${stylesFileName};'`;
      break;
    case '--scss':
      stylesFileName = componentName.toLowerCase() + '.module.scss';
      componentImportData = `import styles from './${stylesFileName};'`;
      break;
    case '--css':
      stylesFileName = componentName.toLowerCase() + '.css';
      componentImportData = `import styles from './${stylesFileName};'`;
      break;
    case '--less':
      stylesFileName = componentName.toLowerCase() + '.module.less';
      componentImportData = `import styles from './${stylesFileName};'`;
      break;
    case '--stylus':
      stylesFileName = componentName.toLowerCase() + '.module.stylus';
      componentImportData = `import styles from './${stylesFileName}';`;
      break;
    default:
      if (stylesFlag !== '--styled') {
        console.error(chalk.bold.red('Unknowm style flag!: ' + `'${stylesFlag}'`));
        process.exit();
      } else {
        stylesData = `import styled from 'styled-components';\n`;
      }
      break;
  }

  return [stylesFileName, stylesData, componentImportData];
};

module.exports = getStyles;
