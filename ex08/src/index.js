// Only change code below this line
function logicalOrOperator(num) {
    var returning = "In";

    if(num <20 || num > 30) {
        returning = "Out";
    }
    return returning;
}

logicalOrOperator(0);
logicalOrOperator(9);
logicalOrOperator(20);
logicalOrOperator(23);
logicalOrOperator(30);
logicalOrOperator(31);
logicalOrOperator(105);
// Only change code above this line

module.exports = logicalOrOperator;