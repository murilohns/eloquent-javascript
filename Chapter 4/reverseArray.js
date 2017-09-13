function reverseArray(array){
  var myarr = [];
  array.map(function(num){
    myarr.unshift(num);
  })
  return myarr;
}

function reverseArrayInPlace(array){
  return array.reverse()
}

var teste = [1, 2, 3, 4, 5];

console.log(reverseArray(teste));

console.log(reverseArrayInPlace(teste));