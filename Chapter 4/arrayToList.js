function arrayToList(array){
  var list = {};
  array.reverse().map(function(num){
    list = {value: num, rest: list}
  })
  return list;
}

function listToArray(list){
  var arr = [];
  for(var node = list; node; node = node.rest){
    arr.push(node.value);
  };
  return arr;
}

function preppend(element, list){
  list = {value: element, rest: list};
  return list;
}

function nth(list, num){
  myarr = listToArray(list);
  return myarr[num];
}

var myarray = [10, 5, 23, 99];

var aTl = arrayToList(myarray);

var lTa = listToArray(aTl);

var p = preppend(10, aTl);

var n = nth(aTl, 8);

console.log(aTl);
console.log(lTa);
console.log(p);
console.log(n);