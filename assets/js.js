// console.log(window.getComputedStyle(document.body).getPropertyValue('font-size'));
function check(arr, num) {
  for (el in arr) {
    if (num == arr[el]) {
      return true;
    }
  }
  return false;
}

function checkSp(str) {
  for (char of str) {
    if (char == " ") {
      return true;
    }
  }
  return false;
}

function arrTypes(arr) {
  let types = [];
  for (i of arr) {
    types.push(typeof i);
  }
  return types;
}

// console.log(check([10, 20, 30], 30));

// console.log(checkSp("some text"));
// console.log(checkSp("sometext"));

// console.log(arrTypes([10, "20", true, 12.5]));
