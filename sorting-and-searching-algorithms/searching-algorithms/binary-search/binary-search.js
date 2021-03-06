function search(array, element) {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (array[middle] !== element && start <= end) {
        console.log("try");
        if (array[middle] < element) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return array[middle] === element ? middle : -1;
}

//To apply binary search first we need to sort the array.
//sorting with bubble sort.
function sort(array) {
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


const binarySearch = () => {
    let number = 9
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sorted = sort(arr);//first sort the array, then call the binary search.
    return search(sorted, number);
}

module.exports = binarySearch;
