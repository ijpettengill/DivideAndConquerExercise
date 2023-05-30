function findFloor(arr, x, left=0, right=arr.length - 1) {
    if (arr[arr.length - 1] < x) return arr[arr.length - 1];
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2); 
  
    if (arr[middle - 1] < x && arr[middle] >= x) return arr[middle - 1];
  
    // x's floor is on the left side
    if (x < arr[middle]) {
      return findFloor(arr, x, left, middle - 1);
    }
    else {
      return findFloor(arr, x, middle + 1, right);
    }
  }
  
  module.exports = findFloor