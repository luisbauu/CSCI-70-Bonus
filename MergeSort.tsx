function mergeSort(arr: number[]): number[] {
  // If the array has only one element, it is already sorted.
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves.
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Sort the left and right halves.
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves and return the result.
  return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
  const result = [];

  // Compare the elements at the start of the left and right arrays,
  // adding the smaller of the two to the result array.
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // Add any remaining elements from the left or right arrays to the result array.
  return result.concat(left, right);
}

//Online Compiler for this function
// https://www.typescriptlang.org/play?ssl=32&ssc=1&pln=1&pc=1#code/GYVwdgxgLglg9mABAWwKYCcDmqDKd1QAUAhuugFyJgjIBGGA2gLoCUl1djTiA3gLAAoRIhjBEJMgDoANqjCYoAC0QAeALyIAjC16Dhw9Kigh0SUugDcexAF9B1iAgDOUFDAAm72Yg0BZYkqSwNJw+BLoMnIKygD0iABMLFZCiI5gLoiywK4a5pJO0jAQqIQADAA0bp6ySQ7OrugwmIo5iHkFRSXIHl6otQJ16a5O+FCo7gAyqNk+KBjYeASEWVD9wmkZIwTjAEpNLbNoWLijhI3Nq8nWhsamc8eEW2OT01CVT7v7l4J2AwKgkFgCHu2GWr3YNHo6GYlXOLQhnGhrARUOYuhSGwaqCcIGkrWYyWEAHdFDBvGDspF5EpEAA+RClRAAMiZiDhUCp0TpDJ0-BSwlE4hWDFK3HUbK+ItY6P0+kMOLxkgADiAnIoKRy1aIiCw1vobIhUNInKgZbK2djcRyVWqzl98qTsoRdYT9dZfgYjCYkPKrZI0hAAhrYV9+r9BJi2mRZgwAMwAFnK8Vj5QArAA2coAdnKmiTaezudKFRTmYAnExkpGPu4AILRjRHBancz9CPOOCyGRwTCPUbjevoJKIQRAA
