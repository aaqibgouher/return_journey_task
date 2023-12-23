const mergeCarObjects = (obj1, obj2) => {
  // creating new object wiht obj1 value default
  const newObj = { ...obj1 };

  //   looping over obj2
  for (const key in obj2) {
    // if obj2 key is true
    if (obj2.hasOwnProperty(key)) {
      // Check if the property exists in newObj, if yes, append it with an index
      let newKey = key;
      let index = 1;

      //   check if key present in the new obj or not
      while (newObj.hasOwnProperty(newKey)) {
        newKey = key + index;
        index++;
      }

      //   appending new element to new  object
      newObj[newKey] = obj2[key];
    }
  }

  //   returning new obj
  return newObj;
};

// calling merge method with two car object
const result = mergeCarObjects(
  { brand: "Audi", model: "R8", year: "2022" },
  { brand: "BMW", model: "E+", year: "2023" }
);

// log
console.log(result);
