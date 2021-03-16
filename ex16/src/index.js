// Only change code below this line
function checkSign(num) {
    return (num < 0) ? "negative" : (num == 0) ? "zero" : "positive";
}
// Only change code above this line

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));

module.exports = checkSign;