function countBs(text){
  var count = 0
  for(i=0; i<text.length; i++){
    if(text.charAt(i) == "B"){
      count++
    }
  }
  return count
}

function countChar(text, char){
  var count = 0
  for(i=0; i<text.length; i++){
    if(text.charAt(i) == char){
      count = count + 1
    }
  }
  return count
}

console.log(countBs("BBbC"))
console.log(countChar("kkkkkj", "k"))