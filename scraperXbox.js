
const puppeteer = require('puppeteer');

(async function walmartX() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.walmart.com/ip/seort/443574645?irgwc=1&sourceid=imp_VuGTHHWX8xyLRStwUx0Mo3ZzUkB0szUWPwlMSQ0&veh=aff&wmlspartner=imp_62662&clickid=VuGTHHWX8xyLRStwUx0Mo3ZzUkB0szUWPwlMSQ0&sharedid=&affiliates_ad_id=612734&campaign_id=9383');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[1]/section/div[2]/div/div/div/div/div/b)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[1]/section/div[2]/div/div/div/div/div/b)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = 'out of stock');
    {
        let stock = 'Out of stock';
        console.log('The Xbox Series X is:', stock);
       
    }
    // close the browser
    await browser.close();
})();

(async function walmartS() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.walmart.com/ip/Xbox-Series-S/606518560');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[2]/div[1]/section/div[1]/div[3]/button/span/span)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[2]/div[1]/section/div[1]/div[3]/button/span/span)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = 'Add to Cart');
    {
    console.log('The Xbox Series S is: In Stock');
    let stock = 'In Stock';
    }
   
    // close the browser
    await browser.close();
})();

(async function targetX() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.target.com/p/xbox-series-x-console/-/A-80790841');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div/div)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div/div)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of Stock';
        console.log('The Xbox Series X is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function targetS() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.target.com/p/xbox-series-s-console/-/A-80790842#lnk=sametab');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div[3])[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div[3])[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of Stock';
        console.log('The Xbox Series X is:', stock);
    }
    // close the browser
    await browser.close();
})();

(async function amazonX() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/dp/B08H75RTZ8/ref=olp_aod_early_redir?_encoding=UTF8&aod=1&th=1');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/div[3]/div[6]/div[6]/div[1]/div[2]/div/div/div/div/div/form/div/div/div[1]/span[1])[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/div[3]/div[6]/div[6]/div[1]/div[2]/div/div/div/div/div/form/div/div/div[1]/span[1])[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = 'Currently unavailable');
    {
        let stock = 'Out of stock';
        console.log('The Xbox Series X is:', stock);
       
    }
    // close the browser
    await browser.close();
})();

(async function amazonS() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/dp/B08G9J44ZN/ref=olp_aod_early_redir?_encoding=UTF8&aod=1&th=1');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[2]/span/span/span/div/div/div[4]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/form/span/span/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[2]/span/span/span/div/div/div[4]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/form/span/span/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Xbox Series S is:', stock);
       
    }
    // close the browser
    await browser.close();
})();

(async function gameStopX() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.gamestop.com/video-games/xbox-series-x/consoles/products/xbox-series-x/B224744V.html');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of stock';
        console.log('The Xbox Series X is:', stock);
       
    }
    // close the browser
    await browser.close();
})();

(async function gameStopS() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.gamestop.com/video-games/xbox-series-x/consoles/products/xbox-series-s-digital-edition/B224746K.html');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[2]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of stock';
        console.log('The Xbox Series S is:', stock);
       
    }
    // close the browser
    await browser.close();
})();

(async function bestBuyX() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/microsoft-xbox-series-x-1tb-console-black/6428324.p?skuId=6428324');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of stock';
        console.log('The Xbox Series X is:', stock);
       
    }
    // close the browser
    await browser.close();
})();

(async function bestBuyS() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/microsoft-xbox-series-s-512-gb-all-digital-console-disc-free-gaming-white/6430277.p?skuId=6430277');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Xbox Series S is:', stock);
       
    }
    // close the browser
    await browser.close();
})();