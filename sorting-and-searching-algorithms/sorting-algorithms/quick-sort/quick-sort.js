function sort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArr.push(array[i]);
        } else {
            rightArr.push(array[i]);
        }
    }

    return [...sort(leftArr), pivot, ...sort(rightArr)];
}

const quickSort = () => {
    let arr = [1, 4, 2, 8, 345, 123, 43, 302, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
    return sort(arr);
}

module.exports = quickSort;