// npm install selenium-webdriver
// npm install chromedriver
// PATH=./node_modules/.bin:$PATH node

const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
driver.get('https://login-sandbox.imedidata.net');

const pageObject =
{
    "elem1": "//<xPath>"

}


function selectElem (elem) 
{
    if (driver.wait(until.elementLocated(By.xpath(elem)), 10000)) 
    {
        driver.findElement(By.xpath(elem)).click();
    } 
    else 
    {
        console.log("Could not select the element: ${elem}");
    }
    
}

function sendInputTo (elem, input)
{
    if (driver.wait(until.elementLocated(By.xpath(elem)), 10000)) 
    {
        driver.findElement(By.xpath(elem)).sendKeys(input);
    } 
    else 
    {
        console.log("Could not send ${input} to the element: ${elem}");
    }
}