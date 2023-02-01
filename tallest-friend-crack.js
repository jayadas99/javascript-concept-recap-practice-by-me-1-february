//  Who is the tallest?

// Math Operation
// Loop

// Tom and his friends are participating in the "Who is the tallest?" competition. As per the name, the person with the highest height will be the winner. Can you find who is the tallest among Tom and all of his friends?
// [Note:

// Input format: an array will be accepted as input

// Output format: A single number

// ]

// Input:

// The input line can have multiple integer numbers, xi (The height of ith friend in cm).
// Output:

// Print the height of the tallest friend (cm).



// Sample Input-1:

// 157  134  188 


// Sample Output-1:

// 188 -->


function tallestFriend ( height ) {
var largest = height[0]
   for(var i = 0; i < height.length; i++){
    
    if(largest < height[i]){
        largest = height[i];
    }
      
}
return largest;
}

var numbers = [157, 134, 188]

var findLargest = tallestFriend(numbers);
console.log(findLargest);



