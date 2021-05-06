
const puppeteer = require('puppeteer');

(async function walmartSwitch() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.walmart.com/ip/Nintendo-Switch-Console-with-Neon-Blue-Red-Joy-Con/709776123');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[2]/div[1]/section/div[1]/div[3]/button/span/span)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[2]/div[1]/section/div[1]/div[3]/button/span/span)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Nintendo Switch is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function walmartLite() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.walmart.com/ip/Nintendo-Switch-Lite-Console-Gray/907697007?selected=true');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[2]/div[1]/section/div[1]/div[3]/button/span/span)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/div[2]/div[2]/div[1]/section/div[1]/div[3]/button/span/span)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Nintendo Switch Lite is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function targetSwitch() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.target.com/p/nintendo-switch-with-neon-blue-and-neon-red-joy-con/-/A-77464001#lnk=sametab');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div[3]/div[1]/div[2]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div[3]/div[1]/div[2]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Nintendo Switch is:', stock);
    }
   
    // close the browser
    await browser.close();
})();

(async function targetLite() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.target.com/p/nintendo-switch-lite-gray/-/A-77419246#lnk=sametab');

    // wait for element defined by XPath appear in page
   
   await page.waitForXPath("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div[3]/div[1]/div[2]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div[3]/div[1]/div[2]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock'
        console.log('The Nintendo Switch Lite is:', stock);
       
    }
  
    // close the browser
    await browser.close();
})();

(async function amazonSwitch() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/Nintendo-Switch-Neon-Blue-Joy%E2%80%91/dp/B07VGRJDFY/ref=sr_1_1_sspa?crid=2JLDHX30B7L4Z&dchild=1&keywords=nintendo+switch&qid=1619131821&s=electronics&sprefix=ninte%2Caps%2C201&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSVpNQjdXOFRIMTQ0JmVuY3J5cHRlZElkPUEwOTExMTQ2MVNNN0gxREkzMUs5NCZlbmNyeXB0ZWRBZElkPUEwNDg4MjE1M0E2RUY0SVoxM1pYMSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/span/span/span/div/div/div[4]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/form/span/span/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/span/span/span/div/div/div[4]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/form/span/span/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Nintendo Switch is:', stock);  
    }
   
    // close the browser
    await browser.close();
})();

(async function amazonLite() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/Nintendo-Switch-Lite-Gray/dp/B07V2BBMK4/ref=sr_1_2?crid=9RO1V4V1E8P6&dchild=1&keywords=nintendo+switch+lite&qid=1619131845&s=electronics&sprefix=nintendo+switch+%2Celectronics%2C198&sr=1-2');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[2]/div[3]/div[9]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[2]/div[3]/div[9]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Nintendo Switch Lite is:', stock);
    }
   
    // close the browser
    await browser.close();
})();

(async function gameStopSwitch() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.gamestop.com/video-games/nintendo-switch/consoles/products/nintendo-switch-with-gray-joy-con/11095821.html');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[3]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[3]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Nintendo Switch is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function gameStopLite() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.gamestop.com/video-games/nintendo-switch/consoles/products/nintendo-switch-lite-gray/11095774.html');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[3]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[6]/div[3]/div[2]/div[1]/div/div[3]/div[2]/div[3]/div[8]/div[2]/div/div[1]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Nintendo Switch Lite is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function bestBuySwitch() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/nintendo-switch-32gb-console-gray-joy-con/6364253.p?skuId=6364253');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[9]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[9]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Nintendo Switch is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function bestBuyLite() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/nintendo-switch-32gb-lite-gray/6257135.p?skuId=6257135');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[9]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[9]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Nintendo Switch Lite is:', stock);
    }
   
    // close the browser
    await browser.close();
})();
