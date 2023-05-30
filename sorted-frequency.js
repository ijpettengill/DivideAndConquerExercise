function sortedFrequency(arr, val) {
    if (arr[0] > val || arr[arr.length - 1] < val) return -1;
    const middle = Math.floor(arr.length / 2);
    let count = 0;
  
    if (arr[middle] === val) {
      count++;
      for (let i = middle - 1; arr[i] === val; i--) {
        count++;
      }
      for (let i = middle + 1; arr[i] === val; i++) {
        count++;
      }
    } else if (val > arr[middle]) {
      for (let i = middle + 1; i < arr.length; i++) {
        if (arr[i] === val) count++;
        if (arr[i] > val) break;
      }
    } else {
      for (let i = middle; i >= 0; i--) {
        if (arr[i] === val) count++;
        if (arr[i] < val) break;
      }
    }
    return count;
  }
  
  module.exports = sortedFrequency