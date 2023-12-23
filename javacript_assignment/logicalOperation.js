const getCommon = (arr1, arr2) => {
  // for storing common elements
  let common = [];

  //   looping over first arr
  arr1.map((ele) => {
    // if ele in first array present in second array, push in common
    if (arr2.includes(ele)) common.push(ele);
  });

  //   return common array
  return common;
};

// log
console.log(getCommon([1, 1, 2, 3], [1, 1, 1]));
