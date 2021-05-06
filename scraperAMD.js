
const puppeteer = require('puppeteer');

(async function amazonR5() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/AMD-Processor-Wraith-Stealth-Cooler/dp/B07XTQZJ28/ref=sr_1_1_mod_primary_new?dchild=1&keywords=ryzen+5&qid=1619132372&rnid=172282&s=electronics&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[2]/div[2]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[2]/div[2]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The RYZEN 5 is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function amazonR7() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/AMD-Ryzen-5800X-16-Thread-Processor/dp/B0815XFSGK/ref=sr_1_2?crid=11S9PQXR7YW59&dchild=1&keywords=ryzen+7&qid=1619132426&s=pc&sprefix=ryzen+7%2Celectronics%2C189&sr=1-2');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[2]/div[2]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[2]/div[2]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The RYZEN 7 is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function amazonR9() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/AMD-Ryzen-3950X-32-Thread-Processor/dp/B07ZTYKLZW/ref=sr_1_2?dchild=1&keywords=ryzen+9&qid=1619132465&rnid=172282&s=electronics&sr=1-2');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[2]/div[2]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[2]/div[2]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The RYZEN 9 is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function newEggR5() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.newegg.com/amd-ryzen-5-2600/p/N82E16819113496?Description=ryzen%205&cm_re=ryzen_5-_-19-113-496-_-Product&quicklink=true');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[7]/div[2]/div[1]/div/div/div[1]/div[1]/div[4]/div[1]/div[2]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[7]/div[2]/div[1]/div/div/div[1]/div[1]/div[4]/div[1]/div[2]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The RYZEN 5 is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function newEggR7() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.newegg.com/amd-ryzen-7-3700x/p/N82E16819113567?Description=ryzen%207&cm_re=ryzen_7-_-19-113-567-_-Product&quicklink=true');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[7]/div[2]/div[1]/div/div/div[1]/div[1]/div[4]/div[1]/div[2]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[7]/div[2]/div[1]/div/div/div[1]/div[1]/div[4]/div[1]/div[2]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The RYZEN 7 is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function newEggR9() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.newegg.com/amd-ryzen-9-3950x/p/N82E16819113616?Description=ryzen%209&cm_re=ryzen_9-_-19-113-616-_-Product&quicklink=true');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[7]/div[2]/div[1]/div/div/div[1]/div[1]/div[4]/div[1]/div[2]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[7]/div[2]/div[1]/div/div/div[1]/div[1]/div[4]/div[1]/div[2]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The RYZEN 9 is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function bestBuyR5() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/amd-ryzen-5-3600-3rd-generation-6-core-12-thread-3-6-ghz-4-2-ghz-max-boost-socket-am4-unlocked-desktop-processor/6356278.p?skuId=6356278');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of stock';
        console.log('The RYZEN 5 is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function bestBuyR7() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/amd-ryzen-7-3700x-3rd-generation-8-core-16-thread-3-6-ghz-4-4-ghz-max-boost-socket-am4-unlocked-desktop-processor/6356277.p?skuId=6356277');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[7]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[7]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The RYZEN 7 is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function bestBuyR9() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/amd-ryzen-9-3900x-3rd-generation-12-core-24-thread-3-8-ghz-4-6-ghz-max-boost-socket-am4-unlocked-desktop-processor/6356274.p?skuId=6356274');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of stock';
        console.log('The RYZEN 9 is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();
