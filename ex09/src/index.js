// Only change code below this line
function functionElse(num) {
    var returning = "";

    if(num <=5) {
        returning = "5 or smaller";
    } else {
        returning = "Bigger than 5";
    }
    return returning;
}

functionElse(4);
functionElse(5);
functionElse(6);
functionElse(10);
// Only change code above this line

module.exports = functionElse;