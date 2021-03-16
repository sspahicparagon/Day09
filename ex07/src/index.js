// Only change code below this line
function logicalAndOperator(num) {
    var returning = "No";

    if(num <= 80 && num >= 40) {
        returning = "Yes";
    }
    return returning;
}

logicalAndOperator(0);
logicalAndOperator(24);
logicalAndOperator(45);
logicalAndOperator(57);
logicalAndOperator(100);
// Only change code above this line

module.exports = logicalAndOperator;