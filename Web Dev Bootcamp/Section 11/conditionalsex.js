var age = prompt("Please enter your age.");
if(age < 18){
	alert("You are not old enough to enter.");
}
else if (age>18 && age<21){
	alert("You may enter but cannot drink.");
}
else{
	alert("You may enter and get lit.");
}
if(age%Math.sqrt(age)===0){
	alert("Perfect square");
}