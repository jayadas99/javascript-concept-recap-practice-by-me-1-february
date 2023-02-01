// var friends = ["alia", "mimmim", "annaduttl", "suniti", "plavvon"]

function getLargestString(names){

    var largest = names[0];
    var maxLength = names[0].length;

    for (i = 0; i <= names.length; i++){

        var mlength = names[i].length;

        if(mlength > maxLength){
            largest = names[i];
            maxLength = mlength;
        }
    }
    return largest;
}

var friends = ["alia", "mimmim", "annaduttl", "suniti", "plavvon"];



var largestString = getLargestString(friends);
console.log(largestString);



