// Only change code below this line
function myEqualFunction(num) {
    var returning = "";

    if(num === 23) {
        returning = "Equal";
    } else {
        returning = "Not equal";
    }
    return returning;
}

myEqualFunction(5);
myEqualFunction(23);
myEqualFunction("23");
myEqualFunction('23');
myEqualFunction("text");
// Only change code above this line

module.exports = myEqualFunction;