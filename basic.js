let fruits = ["Apple", "Mango", "Cherry"];
fruits[3] = "Pear";
fruits.forEach((value, index) => {
  console.log('val:' + value + ':' + index);
});

fruits = fruits.concat("Banana", "Grapes");
fruits.forEach((value, index) => {
  console.log('val:' + value + ':' + index);
});

// 匿名 function
((val) => {
  console.log(val);
})(33);

// 物件 setter 與 getter 用法
const obj1 = {
  set value(val) {
    this.val = val;
  },

  get value() {
    return this.val;
  }
}

// 賦值與取值，會呼叫 set 與 get 兩個function
obj1.value = 55;
console.log('---');
console.log(obj1.value);

var { a, fn } = require("./aaa");
console.log(fn());
console.log(a);

const f2 = () => {
  return 'f2';
}

console.log(f2());

// function當參數
function f3(ff) {
  console.log('9+8=' + ff(9, 8));
}

f3((a, b) => {
  return a + b;
});

// 物件當參數
const v1 = 3;
const v2 = 7;
function f4(obj) {
  console.log(v1 + 'x' + v2 + ' = ' + obj.mul(3, 7));
  console.log(v1 + '+' + v2 + ' = ' + obj.add(3, 7));
}

f4({
  mul: (a, b) => {
    return a * b;
  },
  add: (a, b) => {
    return a + b;
  }
});

const obj2 = {
  hello() {
    return {
      num1: 101,
      num2: 102,
      num3: 103
    }
  }
}

console.log(obj2.hello());
console.log(obj2.hello().num1);
