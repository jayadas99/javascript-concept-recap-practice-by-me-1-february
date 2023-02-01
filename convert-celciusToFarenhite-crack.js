function getFarenhite(number){
    var farenhite = (number*(9/5)) + 32;
    return farenhite;
}

var number = 60;



var myFarenhite = getFarenhite(number);
console.log('farenhite value: ', myFarenhite);