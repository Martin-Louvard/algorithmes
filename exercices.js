const array = [10, 15, 3, 7];
const k = 18;

sumExists = (array) => {
  let index = 0;
  let result = false;
  while (index < array.length) {
    for (let i = index + 1; i < array.length; i++) {
      const sum = array[index] + array[i]
      if (sum == k) {
        result = true;
        return true;
      } else {
        result = false;
      }
    }
    index += 1;
  }
  return result;
}

console.log(`Exercice 1 ${sumExists(array)} \n`);

isSun = (array) => {
  let count = 1;
  for (let i = 0; i < array.length - 1; i++) {
    let distanceToHidingBuilding = 0;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        distanceToHidingBuilding += 1;
      }
    }
    if (distanceToHidingBuilding === array.length - (i + 1)) {
      count += 1;
    }
  }
  return count;
}

console.log(`Exercice 2 ${isSun(array)}  \n`);

exerciceTrois = (array, index = 0) => {
  if (index > array.length - 1) {
    return false;
  } else {
    for (let i = index + 1; i < array.length; i++) {
      const sum = array[index] + array[i]
      if (sum == k) {
        return true;
      }
    }
  }
  exerciceTrois(array, index + 1);
  return false;
}

console.log(`exercice 3 ${exerciceTrois(array)} \n`);


let count = 1;
exerciceQuatre = function (array, index = 0) {
  if (index == array.length - 1) {
    return;
  }
  let distanceToHidingBuilding = 0;
  for (let j = index + 1; j < array.length; j++) {
    if (array[index] > array[j]) {
      distanceToHidingBuilding += 1;
    }
  }
  if (distanceToHidingBuilding === array.length - (index + 1)) {
    count += 1;
  }

  exerciceQuatre(array, index + 1);
  return count;
}
console.log(`exercice 4 ${exerciceQuatre(array)} \n`);



exerciceCinq = (array) => {
  temp = []
  for (i = 0; i < array.length; i++) {
    diff = k - array[i];
    if (temp[diff]) {
      return true
    } else {
      temp[array[i]] = true
    }
  };
  return false
}

console.log(`exercice 5 ${exerciceCinq(array)}`);


exerciceSix = (array) => {
  let counter = 1;
  let last = array.length - 1;
  let lastHighest = array[last];

  for (i = array.length - 2; i > 0; i--) {
    if (array[i] > lastHighest) {
      counter += 1;
      lastHighest = array[i];
    }
  }
  return counter;
}

console.log(`exercice 6 ${exerciceSix(array)} \n`);

