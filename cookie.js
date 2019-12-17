var webPage = require('webpage');
var page = webPage.create();

page.open("https://www.solarweb.com/Home/GuestLogOn?pvSystemid=4e0095f0-0673-487d-81bb-f97ad8e8b64a", function(){

    // this block is executed after the first page is opened
    // var page1 = webPage.create();
    page.open("https://www.solarweb.com/Chart/GetChartNew?pvSystemId=660784d8-4b07-487b-b940-71cfebc24e1c&year=2019&month=11&day=26&interval=day&view=consumption", function(status) {
        
        var ua = page.evaluate(function() {
            return document.getElementsByTagName("pre")[0].textContent;
        });
        console.log(ua);
    
    phantom.exit();
    })
});