// Only change code below this line
function compareStrictValues(m) {
    var returning = "";

    if(m != 55) {
        returning = "Not equal";
    } else {
        returning = "Equal";
    }
    return returning;
}

compareStrictValues(55);
compareStrictValues("55");
compareStrictValues("21");
compareStrictValues(12);
compareStrictValues("Doe");
// Only change code above this line

module.exports = compareStrictValues;