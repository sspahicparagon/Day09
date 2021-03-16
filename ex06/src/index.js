// Only change code below this line
function comparisonToEqual(a) {
    var returning = "";

    if(a < 10) {
        returning = "Less than 10";
        if(a < 5) {
            returning = "Less than 5";
        }
    }
    else {
        returning = "10 or over";

        if(a > 20) {
            returning = "More than 20";
        }
    }
    return returning;
}

comparisonToEqual(0);
comparisonToEqual(5);
comparisonToEqual(17);
comparisonToEqual(21);
// Only change code above this line

module.exports = comparisonToEqual;