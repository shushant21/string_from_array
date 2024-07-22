function joinArrayElements(arr) {
    return arr.filter(element => typeof element === 'string').join(',');
  }
