// Generate 50 objects
// Each object needs three properties:
// - name
// - group
// - id

// The properties have the following rules:

// - name must be a string
// - id must be a number. Specifically, an integer and must be unique amongst the objects (no two objects can have the same id)
// - group must be one of the following strings: "x", "y" or "z". Each of these strings needs representing in the set of generated objects (at least one object set to "x", one to "y" and one to "z")

const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const randomItem = (arrLength) => {
  return Math.floor(Math.random() * arrLength);
};

const names = ["john", "martha", "pamela", "brian", "caoimhe", "fintan"];

const groups = ["x", "y", "z"];

const generateUsers = (n) => {
  arr = [];
  for (i = 1; i < n; i++) {
    arr.push({
      name: names[randomItem(names.length)],
      group: groups[randomItem(groups.length)],
      id: generateId(),
    });
  }
  console.log(arr);
}

generateUsers(50);
