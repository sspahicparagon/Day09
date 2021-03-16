// Only change code below this line
function logicOrder(num) {
    var returning = "";

    if(num <50) {
        returning = "Less than 50";
    } else if(num < 100) {
        returning = "Less than 100";
    } else {
        returning = "Greater than or equal to 100";
    }
    return returning;
}

logicOrder(28);
logicOrder(60);
logicOrder(110);
// Only change code above this line

module.exports = logicOrder;