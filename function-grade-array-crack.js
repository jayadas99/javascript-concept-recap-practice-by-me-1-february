// var numbers = [95, 45, 65, 56 , 77 , 79]
  function findGrade(marks){
    for(i=0; i<marks.length; i++){
        if(marks[i] >= 80 && marks[i]<100){
            console.log(marks[i], "grade A");
            var grade = "A";
            
        }
        else if(marks[i] >=60 && marks[i]<80){
            console.log(marks[i], "grade B");
            var grade = "B";
            
        }
        else if(marks[i] >=50 && marks[i]<60){
            console.log(marks[i], "grade C");
            var grade = "C";
            
        }
        else if(marks[i] >=40 && marks[i]<50){
            console.log(marks[i], "grade D");
            var grade = "D";
            
        }
        else if(marks[i] <=39){
            console.log(marks[i], "grade F");
            var grade = "F";
            
        }
    }
    return grade;
  }

  var numbers = [95, 45, 65, 56 , 77 , 79];
//   findGrade(numbers)

  var findGpa = findGrade(numbers);
  console.log(findGpa);
  