
const puppeteer = require('puppeteer');

(async function walmartDig() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.walmart.com/ip/Sony-PlayStation-5-Digital-Edition/493824815');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[1]/section/div[2]/div/div/div/div/div/b)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[1]/section/div[2]/div/div/div/div/div/b)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    console.log('The Playstation 5 Digital Edition is:', scrapper);
    

    // close the browser
    await browser.close();
})();

(async function walmartDisc() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.walmart.com/ip/Sony-PlayStation-5-Video-Game-Console/363472942');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[1]/section/div[2]/div/div/div/div/div/b)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[1]/section/div[2]/div/div/div/div/div/b)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = 'out of stock');
    {
        let stock = 'Out of Stock';
        console.log('The Playstation 5 Disc Edition is:', stock);
       
    }
    if(scrapper != 'out of stock')
    {
    stock = 'Out of Stock'; 
    console.log(stock);
    }
    // close the browser
    await browser.close();
})();

(async function targetDig() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.target.com/p/playstation-5-digital-edition-console/-/A-81114596#lnk=sametab');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div/div)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div/div)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = 'Sold out');
    {
        let stock = 'Out of stock';
        console.log('The Playstation 5 Digital Edition is:', stock);
       
    }
    if(scrapper != 'Sold out')
    {
    stock = 'Out of Stock'; 
    console.log(stock);
    }
    // close the browser
    await browser.close();
})();

(async function targetDisc() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.target.com/p/playstation-5-console/-/A-81114595#lnk=sametab');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div/div)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div/div)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = 'Sold out');
    {
        let stock = 'Out of Stock';
        console.log('The Playstation 5 Disc Edition is:', stock);
       
    }
    if(scrapper != 'Sold out')
    {
    stock = 'Out of Stock'; 
    console.log(stock);
    }
    // close the browser
    await browser.close();
})();

(async function psStoreDig() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://direct.playstation.com/en-us/consoles/console/playstation5-digital-edition-console.3005817');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div/div[3]/producthero-component/div/div/div[3]/producthero-info/div/div[4]/div[2]/p)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div/div[3]/producthero-component/div/div/div[3]/producthero-info/div/div[4]/div[2]/p)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = 'Out of Stock');
    {
        let stock = 'Out of Stock';
        console.log('The Playstation 5 Digital Edition is:', stock);
       
    }
    if(scrapper != 'Out of Stock')
    {
    stock = 'Out of Stock'; 
    console.log(stock);
    }
    // close the browser
    await browser.close();
})();

(async function psStoreDisc() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div/div[3]/producthero-component/div/div/div[3]/producthero-info/div/div[4]/div[2]/p)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div/div[3]/producthero-component/div/div/div[3]/producthero-info/div/div[4]/div[2]/p)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = 'Out of Stock');
    {
        let stock = 'Out of Stock';
        console.log('The Playstation 5 Disc Edition is:', stock);
       
    }
    if(scrapper != 'Out of Stock')
    {
    stock = 'Out of Stock'; 
    console.log(stock);
    }
    // close the browser
    await browser.close();
})();

(async function gameStopDig() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5-digital-edition/11108141.html');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of stock';
        console.log('The Playstation 5 Digital Edition is:', stock);
       
    }
    // close the browser
    await browser.close();
})();

(async function gameStopDisc() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5/11108140.html');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of stock';
        console.log('The Playstation 5 Digital Edition is:', stock);
    }
    // close the browser
    await browser.close();
})();

(async function bestBuyDig() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/sony-playstation-5-digital-edition-console/6430161.p?skuId=6430161');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of stock';
        console.log('The Playstation 5 Digital Edition is:', stock);
    }
    // close the browser
    await browser.close();
})();

(async function bestBuyDisc() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of stock';
        console.log('The Playstation 5 Digital Edition is:', stock);
       
    }
    // close the browser
    await browser.close();
})(); 
