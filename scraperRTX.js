
const puppeteer = require('puppeteer');

(async function amazon3070() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/MSI-GeForce-Tri-Frozr-Architecture-Graphics/dp/B08KWN2LZG/ref=sr_1_1?dchild=1&keywords=rtx+3070&qid=1620275068&s=videogames&sr=1-1');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/div[3]/div[6]/div[6]/div[1]/div[2]/div/div/div/div/div/form/div/div/div[1]/span[1])[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/div[3]/div[6]/div[6]/div[1]/div[2]/div/div/div/div/div/form/div/div/div[1]/span[1])[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = 'Currently unavailable');
    {
        let stock = 'Out of Stock';
        console.log('The RTX 3070 is:', stock);
    }
    // close the browser
    await browser.close();
})();

(async function amazon3080() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/Gaming-GeForce-Graphics-DisplayPort-Bearings/dp/B08TFLDLTM/ref=sr_1_5?dchild=1&keywords=rtx+3080&qid=1620275099&sr=8-5');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[2]/div[2]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[2]/div[2]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The RTX 3080 is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function amazon3090() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/ZOTAC-Graphics-IceStorm-Advanced-ZT-A30900J-10P/dp/B08ZL6XD9H/ref=sr_1_3?dchild=1&keywords=rtx+3090&qid=1620275130&sr=8-3');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/span/span/span/div/div/div[4]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/form/span/span/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/span/span/span/div/div/div[4]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/form/span/span/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The RTX 3090 is:', stock);
    }
   
    // close the browser
    await browser.close();
})();

(async function bestBuy3070() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/msi-nvidia-geforce-rtx-3070-ventus-3x-oc-bv-8gb-gddr6-pci-express-4-0-graphics-card/6438278.p?skuId=6438278');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of Stock';
        console.log('The RTX 3070 is:', stock);
    }
    
    // close the browser
    await browser.close();
})();

(async function bestBuy3080() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-gddr6-pci-express-4-0-graphics-card/6432400.p?skuId=6432400');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of Stock';
        console.log('The RTX 3080 is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function bestBuy3090() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/evga-geforce-rtx-3090-xc3-ultra-gaming-24gb-gddr6-pci-express-4-0-graphics-card/6434198.p?skuId=6434198');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[8]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of Stock';
        console.log('The RTX 3090 is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();


(async function newegg3070() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070aorus-m-8gd/p/N82E16814932359?Description=rtx%203070&cm_re=rtx_3070-_-14-932-359-_-Product&quicklink=true');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[7]/div[2]/div[1]/div/div/div[2]/div[1]/div[5]/div[4]/div/strong)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[7]/div[2]/div[1]/div/div/div[2]/div[1]/div[5]/div[4]/div/strong)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of Stock';
        console.log('The RTX 3070 is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function newegg3080() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080gaming-oc-10gd/p/N82E16814932329?Description=3080%20rtx&cm_re=3080_rtx-_-14-932-329-_-Product');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[7]/div[2]/div[1]/div/div/div[2]/div[1]/div[5]/div[4]/div/strong)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[7]/div[2]/div[1]/div/div/div[2]/div[1]/div[5]/div[4]/div/strong)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of Stock';
        console.log('The RTX 3080 is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function newegg3090() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.newegg.com/gigabyte-geforce-rtx-3090-gv-n3090aorus-m-24gd/p/N82E16814932341?Description=3090%20rtx&cm_re=3090_rtx-_-14-932-341-_-Product&quicklink=true');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[7]/div[2]/div[1]/div/div/div[2]/div[1]/div[5]/div[4]/div/strong)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[7]/div[2]/div[1]/div/div/div[2]/div[1]/div[5]/div[4]/div/strong)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of Stock';
        console.log('The RTX 3090 is:', stock);
    }

    // close the browser
    await browser.close();
})();
