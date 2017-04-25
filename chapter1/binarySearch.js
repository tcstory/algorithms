function binarySearch(arr, low, high, target) {
    if (low > high) {
        return -1;
    }

    let mid = (low + high) / 2;
    if (target > arr[mid]) {
        return binarySearch(arr, mid + 1, high, target);
    } else if (target < arr[mid]) {
        return binarySearch(arr, low, high - 1, target);
    } else {
        return arr[mid];
    }
}

 module.exports = binarySearch;