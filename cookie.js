var webPage = require('webpage');
var page = webPage.create();

page.open('https://www.solarweb.com/Home/GuestLogOn?pvSystemid=4e0095f0-0673-487d-81bb-f97ad8e8b64a', function (status) {
  var cookies = page.cookies;

  for(var i in cookies) {
      console.log('asd');
    // console.log(cookies[i].name + '=' + cookies[i].value);
	// if (cookies[i].name == '__RequestVerificationToken') {
	// 	console.log('__RequestVerificationToken = ', cookies[i].value);
	// }
  }
  
  phantom.exit();
});