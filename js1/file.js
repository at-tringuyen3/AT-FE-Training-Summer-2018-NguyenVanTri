// Bài 1
function bai1(a, b) {
  if (a !== b) {
    return a + b;
  } else {
    return (a + b) * 3;
  }
}
var a = parseInt(prompt("Type a"));
var b = parseInt(prompt("Type b"));
var result = bai1(a, b);
document.write("Output " + a + " + " + b + " is " + result);
// Bài 2
function bai2(a) {
  var b = 19;
  if (a > b) {
    return a - b;
  } else {
    if (a == b) {
      return 0;
    } else {
      return b - a;
    }
  }
} 
var a = parseInt(prompt("Type a"));
var result = bai2(a);
document.write("Output: " + result);
// Bài 3
function bai3(str) {
  a = [];
  for (var i = 0; i <= 9; i++) {
    var content = parseInt(str.replace('*', i));
    if (content % 3 == 0) {
      a.push(content);
    }
  }
  return a;
}
var str = prompt("Type a string include numbers and one * ");
document.write("Result: " + bai3(str));
bai3(str);
// Bài 4
function bai4(str) {
  a = [];
  for (var i = 0; i <= 9; i++) {
    var content = parseInt(str.replace('*', i));
    if (content % 6 == 0) {
      a.push(content);
    }
  }
  return a;
}
var str = prompt("Type a string include numbers and one * ");
document.write("Result: " + bai4(str));
