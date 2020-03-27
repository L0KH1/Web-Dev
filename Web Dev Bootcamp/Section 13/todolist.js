window.setTimeout(function(){

var todos=[];
var input=prompt("What would you like to do?");

while(input!=="quit"){
	if(input === "list"){
		listTodos();
	}
	else if(input==="new"){
		addTodo();
	}
	else if(input==="delete"){
		delTodo();
	}
	var input=prompt("What would you like to do?");
}

function listTodos(){
	console.log("*********");
	todos.forEach(function(todo,i){
		console.log(i+": "+todo);
	});
	console.log("*********");
}

function addTodo(){
	var newTodo=prompt("Enter new todo");
	todos.push(newTodo);
}

function delTodo(){
	var delInput=prompt("Enter index");
	todos.splice(delInput,1);
	console.log("item deleted at " +delInput);
}


console.log("okay you quit the app");
}, 500);

