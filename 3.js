const twoSum =(array, target) => {
    let map = {};
    for (let i = 0; i < array.length; i++) {
  let diff = target - array[i];
  if (map[diff] !== undefined) {
  return [map[diff], i];
      }
      map[array[i]] = i;
  }
    return [];
  }