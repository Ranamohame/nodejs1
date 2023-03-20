const { greet } = require('./task');
var t =require('./task');

console.log(t.multiply(3,4));
console.log(t.multiply('A',4));
console.log(t.summition(3,4));
console.log(t.summition('A',4));
console.log(t.subtractionn(4,3));
console.log(t.subtractionn('A',4));

var agee=t.greet("Rana",new Date(1999,7,1));
var ageError=greet("Rana",new Date(2023,1,1));
console.log(agee);
console.log(ageError);