"use strict";

/*
* Require the path module
*/
const path = require("path");

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require("@frctl/fractal").create());

const mandelbrot = require("@frctl/mandelbrot"); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
  skin: "red",
  styles: ["default", "/css/tweaks.css"]
  // any other theme configuration values here
});

/*
 * Give your project a title.
 */
fractal.set("project.title", "Magazine Library");

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set("path", path.join(__dirname, "components"));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set("path", path.join(__dirname, "docs"));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set("static.path", path.join(__dirname, "public"));

fractal.web.set("builder.dest", __dirname + "/static");

fractal.web.theme(myCustomisedTheme);
