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
  styles: ["default", "/css/tweaks.css"],
  favicon: "/images/favicon.ico"
  // any other theme configuration values here
});

/*
 * Give your project a title.
 */
fractal.set("project.title", "Magazine Pattern Library");

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set("path", path.join(__dirname, "components"));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set("path", path.join(__dirname, "documentation"));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set("static.path", path.join(__dirname, "public"));

fractal.web.set("builder.dest", __dirname + "/docs");

fractal.web.theme(myCustomisedTheme);
