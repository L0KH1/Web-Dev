function printReverse(array){
	for(var i=0;i<array.length+1;i++){
		console.log(array[array.length-i]);
	}
}

function isUniform(array){
	var len=array.length;
	var c=0;
	for(var i=0;i<array.length-1;i++){
		if(array[i]===array[i+1]){
			c++;
		}
	}
	if(c==array.length-1){
		console.log(true);
	}
	else{
		console.log(false);
	}
}

function sumArray(array){
	sum = 0;
	for(var i=0;i<array.length-1;i+=2){
		sum+=array[i]+array[i+1];
	}
	return sum;
}

function max(array){
	var max=0;
	for(var i=0;i<array.length;i++){
		if(max<array[i]){
			max=array[i]; 
		}
	}
	return max;
}