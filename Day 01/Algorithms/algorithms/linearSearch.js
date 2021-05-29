function search(array, target) {
    for (i in array) {
        if (array[i] == target) {
            return i;
        }
    }
    //not found
    return -i;
}

function print(index, num) {
    index > -1 ? console.log(num + " found at index: " + index) : console.log(num + "not found ");
}

// const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

const linearSearch = (arr, number) => {
    let index = search(arr, number);
    print(index, number);
}

module.exports = linearSearch;