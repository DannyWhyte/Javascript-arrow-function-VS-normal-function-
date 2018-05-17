// sample one basic addition function in different ways
//                  ==================== Basic ==============================
var addMe = function (one, two) {
  return one + two
}
console.log('Output of addition func in normal way ->', addMe(2, 4))
//                  ==================== Arrow Type 1 ==============================
//                     [here only keyword 'function' is replaced by '=>' keyword]
var addMeArrowOne = (one, two) => {
  return one + two
}
console.log('Output of addition func using arrow function in type 1 ->', addMeArrowOne(2, 4))
//                  ==================== Arrow Type 2 ==============================
//          [if function has only one line of code or just another function is called in return
//         then it can be written like this (eg: calling function in .then while using promises)]
var addMeArrowTwo = (one, two) => one + two
console.log('Output of addition func using arrow function in type 2 ->', addMeArrowTwo(2, 4))
//                  ==================== Arrow Type 3 ==============================
//                     [if there is only one param then no brackets are required]
var addMeArrowThree = one => one + 4
console.log('Output of addition func using arrow function in type 3 ->', addMeArrowThree(2))
//                  ==================== Arrow Type 4 ==============================
//                         [in case of no params, Empty bracket are required]
var addMeArrowFour = () => 2 + 4
console.log('Output of addition func using arrow function in type 4 ->', addMeArrowFour())
