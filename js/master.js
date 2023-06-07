/*
-- anonymous function 
--calling named function vs anonymaous fonction
--argument to other function 
--task without name 
--set timeout 
*/

// console.log(calc(10, 20)); // we can use the function before i declare it
// function calc(num1, num2) {
//   return num1 + num2;
// }

// an anynomous function
// let calculator = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(calculator(10, 20)); //in this condition i can not use the function before i declare it
//becous i but it in avariable

// say
// setTimeout(function () {
//   console.log("good");
// }, 2000);

/////////////////////////////////////

// example 1
/*
function parent(fname, lname) {
  let message = "hello";
  function conctinate() {
    message = ` ${message} ${fname} ${lname}`;
  }
  conctinate();
  return message;
}
console.log(parent("mahmoud", "medhat"));
*/

//example 3
/*
function parent(fname, lname) {
  let message = "hello";
  function conctinate() {
    return ` ${message} ${fname} ${lname}`;
  }
  return conctinate();
}
console.log(parent("mahmoud", "medhat"));
*/

// example 4

// function parent(fname, lname) {
//   let message = "hello";

//   function concatinate() {
//     function getName() {
//       return `${fname} ${lname}`;
//     }
//     return `${message} ${getName()}`;
//   }
//   return concatinate();
// }
// console.log(parent("mahmoud", "medhat"));

////

// function names(fname, lname) {
//   let hello = "hello";

//   function concatinate() {
//     function full() {
//       function first() {
//         return `${fname}`;
//       }
//       return `${first()} ${lname}`;
//     }
//     return `${hello} ${full()}`;
//   }
//   return concatinate();
// }
// console.log(names("maged", "mahmoud"));

// ////////////

// function partners(one, two, three, ...four) {
//   function ltow() {
//     return `${three} ${four}`;
//   }
//   return `${one} ${two} ${ltow()}`;
// }
// console.log(partners("medhat", "ahmed", "salim", "radi", "badr"));

////////////////////////////////////
/*
function 
arrow function  لا ينصح ب استخدامها طول الوقت 
regular vs arrow [param + no param]
maltiple lines
*/

// let print = function () {
//   return 10;
// };

// let print = () => 10; // you can use this only with the one statment function or with one order

// let print = (num) => num;

// let print = (num1, num2) => num1 + num2;

// console.log(print(100, 50));

///////////////////////////
/*
scope 
--global and local scope
*/
/*
var a = 1; // this is the global scope
let b = 2;

function show() {
  // this called local scope
  var a = 5;
  let b = 6;
  console.log(`from the global ${a}`);
  console.log(`from the global ${b}`);
}
show();

console.log(`from the global ${a}`);
console.log(`from the global ${b}`);
*/

/////////////////////////////////
/*
scope 
block scope [if , switch , for]
*/
/*
var a = 1; // this is the global scope
// var is for the all
// but let can be ordered the global and local
if (10 === 10) {
  let a = 20;
  console.log(`from local scope ${a}`);
}

console.log(`from global scope ${a}`);
*/

//////////////////////////////////////

/*
--scope 
---lexical scope 

--search 
---execution context
---lexical eviroment
*/

// the nested function can access on the variables in the parent function
//but the oposite is not allowed

function parent() {
  let a = 10;

  function child() {
    console.log(a);
    function grand() {
      let b = 100;
      console.log(b);
      console.log(a + 30);
    }
    grand();
  }
  child();
}
parent();
