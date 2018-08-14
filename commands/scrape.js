const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

module.exports = {
  async site(url, options) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const LENGTH_SELECTOR_CLASS = "c-article-item__content";
    const IMG_SELECTOR =
      "#content > section > div > section:nth-child(INDEX) .c-article-item__image-container img";
    const TITLE_SELECTOR =
      "#content > section > div > section:nth-child(INDEX) .c-article-item__copy > h3";

    await page.goto(url);

    let listLength = await page.evaluate(sel => {
      return document.getElementsByClassName(sel).length;
    }, LENGTH_SELECTOR_CLASS);
    let data = [];
    for (let i = 1; i <= listLength; i++) {
      let titleSelector = TITLE_SELECTOR.replace("INDEX", i);
      let imageSelector = IMG_SELECTOR.replace("INDEX", i);
      let title = await page.evaluate(sel => {
        return document.querySelector(sel);
      }, titleSelector);

      let image = await page.evaluate(sel => {
        let element = document.querySelector(sel);
        return element ? element.src : null;
      }, imageSelector);
      data.push({
        image: image,
        title: title
      });
    }

    browser.close();
    return data; // Return the data
  }
};
