const sum = function () {
  let ar = Array.from(arguments);
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
};


const sum2 = function (...args) {
  let arr = args;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

Function.prototype.myBind = function (context) {
    const that = this;
    const arg = Array.from(arguments).slice(1);

  return  function binder()  {
    const callArgs =  Array.from(arguments);
    return that.apply(context, arg.concat(callArgs));
  };
};

Function.prototype.myBind2 = function (context, ...bindArgs) {
  return (...callarg) => this.apply(context, bindArgs.concat(callarg)); 
};


function curriedSum(numArgs) {
  let numbers = [];
  
  function _curriedSum (num) {
    numbers.push(num);
    
    if (numbers.length === numArgs) {
      let sum1 = 0;
      
      numbers.forEach((el) => { sum1  += el; });
      
      return sum1;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

const total = curriedSum(4);
// console.log(total(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
  const that = this;
  let numbers = [];
  
  function _curry (...num) {
    num.forEach(x => numbers.push(x) ); 
    
    if (numbers.length === numArgs) {
      return that(...numbers);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
console.log(f1 = f1(6));
console.log(sumThree.curry(3)(4)(20)(6));