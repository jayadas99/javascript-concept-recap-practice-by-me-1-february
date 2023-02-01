function getLargest(num){
   
   var largest = numbers[0]
   for(var i = 0; i < numbers.length; i++){
    
    if(largest < numbers[i]){
        largest = numbers[i];
    }
      
}
return largest;
}

var numbers = [52, 2, 3, 3, 4, 70, 5, 6, 7, 89, 9, 10]

var findLargest = getLargest(numbers);
console.log(findLargest);



