const fs = require("fs");
const path = require("path");
const createFile = require("../utils/createFile");
const configFile = require("../templates/configFile");
const templateFile = require("../templates/templateFile");
const stylesFile = require("../templates/stylesFile");

module.exports = {
  component(originDir, name, options) {
    const { styles, template, config } = options;
    const files = [
      styles
        ? {
            filename: path.join(originDir, `${name}.scss`),
            name: name,
            content: stylesFile(name)
          }
        : {},
      config
        ? {
            filename: path.join(originDir, `${name}.config.json`),
            name: name,
            content: configFile(name)
          }
        : {},
      template
        ? {
            filename: path.join(originDir, `${name}.hbs`),
            name: name,
            content: templateFile(name)
          }
        : {}
    ].filter(file => Object.keys(file).length > 0);
    if (!fs.existsSync(originDir)) {
      fs.mkdirSync(originDir);
    }
    files.forEach(file => createFile(file));
  },
  modifier(originDir, name, options) {
    const { styles, template, config } = options;
    const files = [
      styles
        ? {
            filename: path.join(originDir, `${name}.scss`),
            name: name,
            content: stylesFile(name)
          }
        : {},
      config
        ? {
            filename: path.join(originDir, `${name}.config.json`),
            name: name,
            content: configFile(name)
          }
        : {},
      template
        ? {
            filename: path.join(originDir, `${name}.hbs`),
            name: name,
            content: templateFile(name)
          }
        : {}
    ].filter(file => Object.keys(file).length > 0);
    if (!fs.existsSync(originDir)) {
      fs.mkdirSync(originDir);
    }
    files.forEach(file => createFile(file));
  }
};
