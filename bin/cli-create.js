const fs = require("fs");
const path = require("path");
const program = require("commander");
const create = require("../commands/create");

program
  .command("component <name>")
  .description("Create new component")
  .option("-s, --no-styles", "No stylesheet", false)
  .option("-co, --no-config", "No configuration file", false)
  .option("-t, --no-template", "No template", false)
  .action((name, options) => {
    const dest = path.join(process.cwd(), "components", name);
    if (fs.existsSync(dest)) {
      console.log(`${dest} already exists!`);
    } else {
      console.log(`Creating ${name}`);
      create.component(dest, name, options);
    }
  })
  .on("--help", function() {
    console.log();
    console.log();
    console.log("  Examples:");
    console.log();
    console.log("    $ ./bin/cli.js create component test");
    console.log("    $ ./bin/cli.js create component test --no-styles");
    console.log("    $ ./bin/cli.js create component test --no-config");
    console.log("    $ ./bin/cli.js create component test --no-template");
    console.log(
      "    $ ./bin/cli.js create component test --no-template --no-config --no-styles"
    );
    console.log();
  });

program
  .command("modifier <name>")
  .description("Create new modifier")
  .option("-s, --no-styles", "No stylesheet", false)
  .option("-co, --no-config", "No configuration file", false)
  .option("-t, --no-template", "No template", false)
  .action((name, options) => {
    const dest = path.join(process.cwd(), "components", name);
    if (fs.existsSync(dest)) {
      console.log(`${dest} already exists!`);
    } else {
      console.log(`Creating ${name}`);
      create.modifier(dest, name, options);
    }
  })
  .on("--help", function() {
    console.log();
    console.log();
    console.log("  Examples:");
    console.log();
    console.log("    $ ./bin/cli.js create modifier test--success");
    console.log("    $ ./bin/cli.js create modifier test--success --no-styles");
    console.log("    $ ./bin/cli.js create modifier test--success --no-config");
    console.log(
      "    $ ./bin/cli.js create modifier test--success --no-template"
    );
    console.log(
      "    $ ./bin/cli.js create modifier test--success --no-template --no-config --no-styles"
    );
    console.log();
  });

program.parse(process.argv);
