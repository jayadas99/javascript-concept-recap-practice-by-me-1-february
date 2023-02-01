// Function to reverse string
function reverse(s) {
    var o = " ";
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }
  
  var string = "greek for greek";

var getReverseString = reverse(string);
console.log(getReverseString);