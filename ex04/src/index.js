// Only change code below this line
function compareDifferentValues(m, n) {
    var returning = "";

    if(m === n) {
        returning = "Equal";
    } else {
        returning = "Not equal";
    }
    return returning;
}

compareDifferentValues(8, "8");
compareDifferentValues("8", 8);
compareDifferentValues('8', 8);
compareDifferentValues("8", "8");
compareDifferentValues(8, 8);
// Only change code above this line

module.exports = compareDifferentValues;