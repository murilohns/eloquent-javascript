//classic mode
for (i = 1; i < 100; i ++){
	if(i%5 == 0 && i%3 != 0){
		console.log("Buzz")
	}
	else if(i%5 == 0 && i%3 == 0){
		console.log("FizzBuzz")
	}
	else if(i%3 == 0){
		console.log("Fizz")
	}else{
		console.log(i)
	}
}

//hard mode
for (i = 1; i < 100; i ++){
	console.log(
		(i%5==0 && i%3 !=0) ? "Buzz" : (i%5== 0 && i%3==0) ? "FizzBuzz" : (i%3==0) ? "Fizz": i
	)
}