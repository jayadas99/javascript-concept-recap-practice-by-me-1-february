function getInterest(principal,rate,time){
    var interest = (principal * rate * time )/100;
    return interest;
}

var princ = 950;
var r = 5;
var t = 2;


var getSud = getInterest(princ,r,t);
console.log(getSud);