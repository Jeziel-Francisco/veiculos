// require('chromedriver');
// var webdriver = require('selenium-webdriver');
// var driver = new webdriver.Builder()
//     .forBrowser('chrome')
//     .build();

// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     var pages = [page];

//     await pages[0].goto('http://servicos2.detran.am.gov.br/detranWeb/veiculo/situacao');


//     // // Get the "viewport" of the page, as reported by the page.
//     const dimensions = await pages[0].evaluate(async () => {
//         document.getElementById('renavam').value = '01130818338';
//         // await document.getElementsByClassName('btn btn-large btn-primary')[0].click();
//         return document.getElementsByTagName('img')[2].src;
//     });

//     pages.push(await browser.newPage());
//     await pages[1].goto(dimensions);

//     pages[1].on('', error, () => { });


//     // console.log('Dimensions:', dimensions);

//     // await browser.close();
// })();


// const puppeteer = require('puppeteer');
// puppeteer.launch({ headless: false }).then(async browser => { 
//     var page = await browser.newPage();
//     await page.goto('http://servicos2.detran.am.gov.br/detranWeb/veiculo/situacao');
//     page.on()
//     browser.close();
// });


var fs = require('fs');

var imageAsBase64 = fs.readFileSync('./capcha.png', 'base64');

console.log(imageAsBase64);