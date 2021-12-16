/**
 * Return a random string to use as an ID.
 * @returns String
 */
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Generate a random int in the range of
 * the number value given
 * @param {number} arrLength 
 * @returns 
 */
const randomItem = (arrLength) => {
  return Math.floor(Math.random() * arrLength);
};

const names = ["john", "martha", "pamela", "brian", "caoimhe", "fintan"];

const groups = ["x", "y", "z"];

/**
 * Generate n amount of user objects.
 * @param {number} n 
 */
const generateUsers = (n) => {
  arr = [];
  for (i = 1; i < n; i++) {
    arr.push({
      id: generateId(),
      name: names[randomItem(names.length)],
      group: groups[randomItem(groups.length)],
    });
  }
  console.log(arr);
}

generateUsers(50);

