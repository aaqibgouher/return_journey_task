const getUnique = (arr) => {
  // new arr
  let newArr = [];

  //   loop over each ele
  arr.map((ele) => {
    // if ele not present in new arr, push it
    if (!newArr.includes(ele)) newArr.push(ele);
  });

  //   return new arr
  return newArr;
};

// we can pass value here
console.log(getUnique([1, 1, 1, 1]));
