function countZeroes(arr) {
    const middle = Math.floor(arr.length / 2);
    if (arr[middle] === 0) {
      for (let i = middle - 1; i >= 0; i--) {
        if (arr[i] === 1) return arr.slice(i + 1).length;
      }
      return arr.length;
    }
    else {
      for (let i = middle + 1; i < arr.length; i++) {
        if (arr[i] === 0) return arr.slice(i).length;
      }
      return 0;
    }
  }
  
  module.exports = countZeroes