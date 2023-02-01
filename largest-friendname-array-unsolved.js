// // var friends = ["alia", "mimmim", "annaduttl", "suniti", "plavvon"]
// তোমার  ফ্রিয়ান্ডলিস্ট  এর  মধ্যে  সবথেকে বড় নামওয়ালা ফ্রেন্ড কে  খুঁজে  বের  করো ?

function getLargestString(names){
    var largest = names[0];
    // var length = names[0].length;
    for (i = 0; i <= names.length; i++){
       
        if(names[i].length > names[0].length){
            largest = names[i];
        }
    }
    return largest;
}

var friends = ["alia", "mimmim", "annaduttl", "suniti", "plavvon"];



var largestString = getLargestString(friends);
console.log(largestString);



