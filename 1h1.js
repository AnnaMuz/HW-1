var login = "someuser@gmail.com";
var password = 2;
var i;
var j;
var etempt = 3;

var EnterLog = prompt('Please enter login!');
if (EnterLog == login){
	alert('You have 3 attempt to enter password!');
	for (j = 1; j < 4; j++){
		var EnterPas = prompt ('Please enter password!');

		if (EnterPas == password){
			alert('Right login and password!');
			j = 3;
		} else {
			etempt--;
			alert('Wrong password! A number of attempt that left is: ' + etempt);
		}
	}
} else {
	alert('Wrong login!'); 
}	




















































