// Contain the script that starts your browser.
const puppeteer = require('puppeteer');


// create an async function called startBrowser(). This function will start the browser and return an instance of it
async function startBrowser(){
	let browser;
	try {
	    console.log("Opening the browser......");
		// launches an instance of a browser
		// This method returns a Promise, so you have to make sure the Promise resolves by using a .then or await block.
	    browser = await puppeteer.launch({
	        headless: false,
	        args: ["--disable-setuid-sandbox"],
	        'ignoreHTTPSErrors': true
	    });
	} catch (err) {
	    console.log("Could not create a browser instance => : ", err);
	}
	return browser;
}

module.exports = {
	startBrowser
};