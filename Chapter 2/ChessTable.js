var columns, rows = 8;
//Easy Mode
for(x=1; x<= rows; x++){
	var table = "";
	for(y=1; y<=rows; y++ ){
		if((x+y)%2==0){
			table += "#";	
		}else{
			table += " ";
		}
	}
	console.log(table)
}

//Hard Mode
for(x=1; x<= rows; x++){
	var table = "";
	for(y=1; y<=rows; y++ ){
		(((y+x)%2==0) ? table += "#" : table += " ")
	}
	console.log(table)
}