// Find the largest number

// You will be given 3 inputs and you will have to print the largest number. Write a function findMax that will return the largest number using if-else.

// Sample Input:

// 55,10,95
// Sample Output:

// 95


function findMax(max){
    for(i=0; i<max.length; i++){
      if(max[i]>max[i + 1] &&max[i]>max[i + 2]){
        console.log(max[i]);
        return max[i]
    }
    else if(max[i + 1]>max[i] && max[i + 1]>max[i + 2]){
        console.log(max[i +1]);
         return max[i +1];
    }
    else if(max[i + 2]>max[i] && max[i + 2]>max[i + 1]){
        console.log(max[i +2]);
        return max[i +2];
    }
    
    }
}

    
    
    var numbers = [55, 10, 95];
    //   findGrade(numbers)
    
      var findLargest = findMax(numbers);
      console.log(findLargest);
      