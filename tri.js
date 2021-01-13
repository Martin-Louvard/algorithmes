class Document {

  constructor(file, countComparison = 0) {
    this.file = file;
    this.countComparison = countComparison;
  }
  //All your sorting method 
  bubble(originalArray) {
    this.countComparison = 0;
    const newArray = [...originalArray];
    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < i; j++) {
        this.countComparison += 1;
        if (newArray[j] > newArray[i]) {
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
      }
    }
    return newArray;
  }

  insertion(originalArray) {
    this.countComparison = 0;
    const newArray = [...originalArray];
    for (let i = 1; i < newArray.length; i++) {
      let key = newArray[i];
      let j = i - 1;
      while (j >= 0 && newArray[j] > key) {
        this.countComparison += 1;
        newArray[j + 1] = newArray[j];
        j = j - 1;
      }
      newArray[j + 1] = key;
    }
    return newArray;
  }

  selection(originalArray) {
    const newArray = [...originalArray];
    let n = newArray.length;
    this.countComparison = 0;
    for (let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (newArray[j] < newArray[min]) {
          min = j;
        }
        this.countComparison += 1;

      }
      if (min != i) {
        // Swapping the elements
        let tmp = newArray[i];
        newArray[i] = newArray[min];
        newArray[min] = tmp;
      }
    }
    return newArray;
  }

  swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        this.countComparison += 1;
        myDocument.swap(items, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  }

  quickSort(items, left, right) {
    const newArray = [...items];
    var index;
    if (newArray.length > 1) {
      index = myDocument.partition(newArray, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
        myDocument.quickSort(newArray, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
        myDocument.quickSort(newArray, index, right);
      }
    }
    return newArray;
  }

  merge(arr1, arr2) {
    let sorted = [];

    while (arr1.length && arr2.length) {
      this.countComparison += 1;
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
    };

    return sorted.concat(arr1.slice().concat(arr2.slice()));
  };

  mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
      left = myDocument.mergeSort(arr.slice(0, mid)),
      right = myDocument.mergeSort(arr.slice(mid));

    return myDocument.merge(left, right);
  };

  oddEvenSort(arr) {
    const newArray = [...arr];
    this.countComparison = 0;
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < newArray.length - 1; i += 2) {
        this.countComparison += 1;
        if (newArray[i] > newArray[i + 1]) {
          [newArray[i + 1], newArray[i]] = [newArray[i], newArray[i + 1]];
          isSorted = false;
        }
      }
      for (let i = 1; i < newArray.length - 1; i += 2) {
        if (newArray[i] > newArray[i + 1]) {
          [newArray[i + 1], newArray[i]] = [newArray[i], newArray[i + 1]];
          isSorted = false;
        }
      }
    }
    return newArray;
  }

  combSort(array) {
    const newArray = [...array];
    this.countComparison = 0;
    let interval = Math.floor(newArray.length / 1.3);

    while (interval > 0) {
      for (let i = 0; i + interval < newArray.length; i += 1) {
        this.countComparison += 1;
        if (newArray[i] > newArray[i + interval]) {
          let small = newArray[i + interval];
          newArray[i + interval] = newArray[i];
          newArray[i] = small;
        }
      }
      interval = Math.floor(interval / 1.3);
    }
    return newArray;
  };


};




readFile = (file) => {
  const fs = require('fs');
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) {
      console.error(error.message);
      return;
    }

    const originalArray = data.split(" ").map(element => parseInt(element));

    myDocument.bubble(originalArray);
    console.log(`Tri à bulles: ${myDocument.countComparison} comparisons - [${myDocument.bubble(originalArray)}]`);

    myDocument.insertion(originalArray);
    console.log(`Tri à insertion: ${myDocument.countComparison} comparisons - [${myDocument.insertion(originalArray)}]`);

    myDocument.selection(originalArray);
    console.log(`Tri à selection: ${myDocument.countComparison} comparisons - [${myDocument.selection(originalArray)}]`);

    this.countComparison = 0;
    myDocument.quickSort(originalArray, 0, originalArray.length - 1);
    console.log(`Tri rapide: ${myDocument.countComparison} comparisons - [${myDocument.selection(originalArray)}]`);

    this.countComparison = 0;
    myDocument.mergeSort(originalArray);
    console.log(`Tri fusion: ${myDocument.countComparison} comparisons - [${myDocument.mergeSort(originalArray)}]`);

    myDocument.oddEvenSort(originalArray);
    console.log(`Tri pair-impair: ${myDocument.countComparison} comparisons - [${myDocument.oddEvenSort(originalArray)}]`);


    myDocument.combSort(originalArray);
    console.log(`Tri à peigne: ${myDocument.countComparison} comparisons - [${myDocument.combSort(originalArray)}]`);

  });
}

const myDocument = new Document(process.argv[2])
readFile(myDocument.file)





