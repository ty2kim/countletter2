var myMap = new Map();
// myMap.set('l', [0,1,2,3]);
// console.log(myMap);


function countLetters(input){
  var myMap = new Map();
  var str = input.toLowerCase();
  for(char in str){
    if(!myMap.get(str[char])){
        myMap.set(str[char], [char]);
    }
    else {
      myMap.get(str[char]).push(char);
    }
  }
  console.log(myMap);
}

countLetters("lighthouse in the house");
