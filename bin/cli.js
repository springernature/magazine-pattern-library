#! /usr/bin/env node

const fs = require("fs");
const program = require("commander");
const pkg = require("../package.json");
const create = require("../commands/create");

program
  .version(pkg.version)
  .description(pkg.description)
  .command("create", "Create a new ")
  .alias("c")
  .command("scrape", "Get new dummy content for components")
  .alias("sc");

program.parse(process.argv);
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
