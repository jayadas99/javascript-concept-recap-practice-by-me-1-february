// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. 

// Input:

// The input parameter will be an array of integers, where each integer represents the mark of a subject given above.

// Output:

// Print the result in 2 decimal places. If you get a fraction rounded up to 2 decimal places. The output must have to be in number format.

// Hints: First check if your output is in number format or string format by  typeof  operator.

function average (arrOfMarks){
 // var nums = [75.25,65,80,35.45,35,99.5];
  var total = 0;
    for(var i = 0; i<arrOfMarks.length;i++){
    var number = arrOfMarks[i];
    total = total + number ;
    }
    var avg = total / arrOfMarks.length;
    avg = avg.toFixed(2);
    avg = parseFloat(avg);
    return avg ;
    }
    var nums = [11,13,28,20,35,39];
    var result = average (nums)
    console.log(result)

