function missingNumber(array) {
    let arr = array.slice();
    var out = [];

    arr.sort(function (a, b) { return a - b });

    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] == 1) {
            out.push(arr[i]);
        } else {
            return arr[i] + 1;
        }
    }
}


//Write a program to find a missing number from the number sequence given.
const findMissingNumber = () => {

    var array = [2, 4, 6, 3, 1, 9, 7, 8];

    return console.log(missingNumber(array));
}

module.exports = findMissingNumber;