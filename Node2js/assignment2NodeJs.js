// q1
// var Emitters = require('events')
// var utils = require('util')

// var MyFunc = new Function();
 // utils.inherits(MyFunc,Emitters)

// MyFunc.prototype.greet = function(data){
    // this.emit('eventFired', data) }
 
 // var customFun = new MyFunc();
 // customFun.on('eventFired', function(data){
// console.log('Hello :' + data)
// });
// customFun.greet('Rana Abdelkhalek');


// q2

// var readline = require('readline');
// var fs = require('fs');

// var rl = readline.createInterface({
//   input: fs.createReadStream('data.json'),
//   crlfDelay: Infinity
// });

// rl.on('line', (line) => {
//   console.log(line);
// });
// q3

// var fs = require('fs');

// fs.rename('test.txt', 'info.txt', (err) => {
//   if (err) throw err;
//   console.log('File renamed Successfully!');
// });


/* Q4- removing */
// var fs = require('fs');

// fs.unlink('info.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted Successfully!');
// });

/*Q5-A */
// var fs = require('fs');

// try {
//   var data = fs.readFileSync('data.json');
//   var jsonData = JSON.parse(data);
//   console.log(jsonData);
// } catch (err) {
//   console.error(err);
// }

/*Q5-B*/
// var fs = require('fs');
// // 
// async function readData() {
//   try {
//     var data = await fs.promises.readFile('data.json', 'utf8');
//     var jsonData = JSON.parse(data);
//     console.log(jsonData);
//   } catch (error) {
//     console.error(error);
//   }
// }
// 




/*Q6*/
// var fs = require('fs');

// fs.writeFile('info.txt', 'hello iti', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved Successfully!');
// });