function range(start, end){
  var myarr = [];
  for(start; start <= end; start++){
    myarr.push(start);
  }
  return myarr;
}

var array = range(1, 10)

var sum = array.reduce(function(previousValue, currentValue){
  return previousValue + currentValue;
})

console.log(sum)
