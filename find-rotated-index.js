function findRotatedIndex(arr, val) {
    const pivotIdx = getPivot(arr);
    // pivot represents highest value arr
  
    if (val > arr[0]) {
      // left side with higher values
      for (let i = 0; i <= pivotIdx; i++) {
        if (arr[i] === val) return i;
      }
    } else {
      // right side with smaller values
      for (let i = arr.length - 1; i > pivotIdx; i--) {
        if (arr[i] === val) return i;
      }
    }
    return -1;
  }
  
  function getPivot(arr) {
    let left = 0, right = arr.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (arr[middle] > arr[middle + 1]) {
        return middle;
      } else if (arr[left] <= arr[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  
  module.exports = findRotatedIndex