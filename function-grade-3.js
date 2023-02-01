// i have solved the grade problem 3 ways 1st using 1 return, second only return, third console and return

// console, 1 return marks
function grade(marks){
    if(marks < 50){
        console.log ("F");
    }
     else if(marks >=50  && marks<60){
        console.log ("D");  
    }
     else if(marks >=60  && marks<70){
        console.log ("C");  
    }
     else if(marks >=70  && marks<80){
        console.log ("B");  
    }
     else if(marks >=80  && marks<90){
        console.log ("A");  
    }
     else if(marks >=90){
        console.log ("A+");  
    }
    
  return marks  ;
}

var number = 55;

// grade(number);
// var getMark = grade(number);
// console.log(getMark);

// console.log(grade(number));


// ? --------------------------------------
// *******************************************
//only  return marks
function grade(marks){
    if(marks < 50){
        return "F";
    }
     else if(marks >=50  && marks<60){
        return "D";  
    }
     else if(marks >=60  && marks<70){
        return "C";  
    }
     else if(marks >=70  && marks<80){
        return "B";
     }
     else if(marks >=80  && marks<90){
        return "A";  
    }
     else if(marks >=90){
        return "A+"; 
    }
    
  
}


// var getMark = grade(number);
// console.log(getMark);

// -----------------------------------------------------
// ----------------------------------------------------


// using return and console
function grade(marks){
    if(marks < 50){
        console.log ("F");
        return "F";
    }
     else if(marks >=50  && marks<60){
        console.log ("D");
        return "D";  
    }
     else if(marks >=60  && marks<70){
        console.log ("C"); 
        return "C"; 
    }
     else if(marks >=70  && marks<80){
        console.log ("B"); 
        return "B"; 
    }
     else if(marks >=80  && marks<90){
        console.log ("A");
        return "A";  
    }
     else if(marks >=90){
        console.log ("A+");
        return "A+";  
    }
    
 
}

var number = 55;


// var getMark = grade(number);
// console.log(getMark);


// You received your final exam results. Write a function find to find your grades using 

// if-else.



// The grading chart is 



// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade


function findGrade(marks){
    if(marks >= 80){
        console.log("grade A");
        return "grade A"
    }
    else if(marks >=60){
        console.log("grade B");
        return "grade B"
    }
    else if(marks >=50){
        console.log("grade C");
        return "grade C"
    }
    else if(marks >=40){
        console.log("grade D");
        return "grade D"
    }
    else if(marks <=39){
        console.log("grade F");
        return "grade F"
    }
}

var number = 65;

// var findGpa = findGrade(number);
// console.log(findGpa);


function findGrade(marks){
    if(marks >= 80 && marks<100){
          console.log("grade A");
          return "grade A"
      }
      else if(marks >=60 && marks<80){
          console.log("grade B");
          return "grade B"
      }
      else if(marks >=50 && marks<60){
          console.log("grade C");
          return "grade C"
      }
      else if(marks >=40 && marks<50){
          console.log("grade D");
          return "grade D"
      }
      else if(marks <=39){
          console.log("grade F");
          return "grade F"
      }
    
  }
  
  var number = 95;
  
  var findGpa = findGrade(number);
  console.log(findGpa);
  
  
  
  


