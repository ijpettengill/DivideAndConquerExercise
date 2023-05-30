function findRotationCount(arr, left=0, right=arr.length - 1) {
    /* first find minimum value, then return its position
    - it has been rotated that many times */
    if (left === right) {
      return right;
    } else if (left > right) {
      return 0;
    }
    
    const middle = Math.floor(( left + right ) / 2);
  
    if (left < middle && arr[middle - 1] > arr[middle]) {
      return middle;
    }
  
    if (right > middle && arr[middle] > arr[middle + 1]) {
      return middle + 1;
    }
  
    if (arr[left] < arr[middle]) {
      return findRotationCount(arr, middle + 1, right);
    } else {
      return findRotationCount(arr, left, middle - 1)
    }
  }
  
  module.exports = findRotationCount