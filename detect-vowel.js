function solution(letter){
    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
        console.log(letter, "vowel");
        return "vowel";
    }
    else if(letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"){
        console.log(letter, "vowel");
        return "vowel";
    }
    else{
        console.log(letter, "consonent");
        return "consonent";
    }
}

var alphabet = "A";


var getLetter = solution(alphabet);
console.log( getLetter);