var webPage = require('webpage');
var page = webPage.create();

page.open("https://www.solarweb.com/Home/GuestLogOn?pvSystemid=4e0095f0-0673-487d-81bb-f97ad8e8b64a", function(){

    // this block is executed after the first page is opened
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    var url_production = "https://www.solarweb.com/Chart/GetChartNew?pvSystemId=660784d8-4b07-487b-b940-71cfebc24e1c&year="+year+"&month="+month+"&day="+day+"&interval=day&view=consumption";
    //sample url
    // "https://www.solarweb.com/Chart/GetChartNew?pvSystemId=660784d8-4b07-487b-b940-71cfebc24e1c&year=2019&month=12&day=15&interval=day&view=consumption"

    page.open(url_production, function(status) {
        
            var d_pro = page.evaluate(function() {
                return document.getElementsByTagName("pre")[0].textContent;
        });
    
        console.log(d_pro);
            phantom.exit();
        
    });

});