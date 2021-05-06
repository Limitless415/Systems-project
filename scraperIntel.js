
const puppeteer = require('puppeteer');

(async function amazonI5() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/Intel-i5-9400-Processor-Processors-984507/dp/B07MGZ9FJZ/ref=sr_1_1?dchild=1&keywords=intel+i5&qid=1619133027&s=electronics&sr=1-1');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[2]/div[3]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[2]/div[3]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Intel i5 is:', stock);
       
    }
    // close the browser
    await browser.close();
})();

(async function amazonI7() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/Intel-i7-10700-Desktop-Processor-BX8070110700/dp/B086MG1C7C/ref=sr_1_2?dchild=1&keywords=intel+i7&qid=1619133167&s=electronics&sr=1-2');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[1]/span/span/span/div/div/div[4]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/form/span/span/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[1]/span/span/span/div/div/div[4]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/form/span/span/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Intel i7 is:', stock);
       
    }
    // close the browser
    await browser.close();
})();

(async function amazonI9() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.amazon.com/Intel-i9-10900-Desktop-Processor-Chipset/dp/B086ML4XSD/ref=sr_1_2?dchild=1&keywords=intel+i9&qid=1619133763&s=electronics&sr=1-2');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[2]/div[3]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[2]/div[3]/div[8]/div[4]/div[1]/div[4]/div/div/div/form/div/div/div/div/div[3]/div/div[20]/div/div/span[2]/span/input)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Intel i9 is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function newEggI5() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.newegg.com/intel-core-i5-11500-core-i5-11th-gen/p/N82E16819118240?Description=intel%20i5&cm_re=intel_i5-_-19-118-240-_-Product&quicklink=true');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[7]/div[2]/div[1]/div/div/div[1]/div[1]/div[4]/div[1]/div[2]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[7]/div[2]/div[1]/div/div/div[1]/div[1]/div[4]/div[1]/div[2]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Intel i5 is:', stock);
       
    }

    // close the browser
    await browser.close();
})();

(async function newEggI7() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.newegg.com/intel-core-i7-11700k-core-i7-11th-gen/p/N82E16819118233?Description=intel%20i7&cm_re=intel_i7-_-19-118-233-_-Product&quicklink=true');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[7]/div[2]/div[1]/div/div/div[1]/div[1]/div[4]/div[1]/div[2]/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[7]/div[2]/div[1]/div/div/div[1]/div[1]/div[4]/div[1]/div[2]/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Intel i7 is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function newEggI9() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.newegg.com/intel-core-i9-11900kf-core-i9-11th-gen/p/N82E16819118259?Description=intel%20i9&cm_re=intel_i9-_-19-118-259-_-Product&quicklink=true');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[7]/div[2]/div[1]/div/div/div[2]/div[1]/div[5]/div[4]/div[1]/strong)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[7]/div[2]/div[1]/div/div/div[2]/div[1]/div[5]/div[4]/div[1]/strong)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'Out of Stock';
        console.log('The Intel i9 is:', stock);
       
    }
    
    // close the browser
    await browser.close();
})();

(async function bestBuyI5() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/intel-core-i5-10400-10th-generation-6-core-12-thread-2-9-ghz-4-3-ghz-turbo-socket-lga1200-locked-desktop-processor/6411498.p?skuId=6411498');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[7]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[7]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Intel i5 is:', stock);
       
    }
  
    // close the browser
    await browser.close();
})();

(async function bestBuyI7() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/intel-core-i7-10700-10th-generation-8-core-16-thread-2-9-ghz-4-8-ghz-turbo-socket-lga1200-locked-desktop-processor/6411495.p?skuId=6411495');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[7]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[7]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Intel i7 is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();

(async function bestBuyI9() {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // go to the target web
    await page.goto('https://www.bestbuy.com/site/core-i9-10850k-desktop-processor-10-cores-up-to-5-2-ghz-unlocked-lga1200-intel-400-series-chipset-125w/6428160.p?skuId=6428160');

    // wait for element defined by XPath appear in page
   
    await page.waitForXPath("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[7]/div[1]/div/div/div/button)[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(/html/body/div[3]/main/div[2]/div[3]/div[2]/div/div/div[7]/div[1]/div/div/div/button)[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    let scrapper = await page.evaluate(el => el.textContent, elHandle[0]);
    if(scrapper = scrapper);
    {
        let stock = 'In Stock';
        console.log('The Intel i9 is:', stock);
       
    }
   
    // close the browser
    await browser.close();
})();