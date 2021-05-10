import pkg from 'calculator'
const {derive} = pkg
console.log(derive('f(x) = Math.pow(x, 2) + x', 1))
console.log(derive('f(x) = Math.pow(x, 2)', 4))