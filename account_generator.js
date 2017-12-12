var webpage = require('webpage');

var page = webpage.create();
var system = require('system');

page.open('https://reddit.com/register', function(status){
	//page.render('before.jpeg', {format: 'jpeg', quality:'100'});

		page.evaluate(function(){
			// $('#user_reg').val('testusr123');
			// $('#passwd_reg').val('buyaif');
			// $('#passwd2_reg').val('buyaif');
			document.getElementById('user_reg').value = 'USER';
			document.getElementById('passwd_reg').value = 'PASSWORD';
			document.getElementById('passwd2_reg').value = 'PASSWORD';
			document.getElementsByClassName('c-btn c-btn-primary c-pull-right')[0].click();
		});

		page.render('after.jpeg', {format: 'jpeg', quality:'100'});


});