/*
Fragmento de código 1

Variables             Values  
 

*/

function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
function hello() {
    console.log('hello');
    return 15;
    
    /*
Fragmento de código 2

Variable             Values 
 result              Hello

*/
}
var result = hello();
console.log('result is', result);
function numPlus(num) {
    console.log('num is', num);
    return num+15;
    /*
Fragmento de código 3

Variable        Values
result          numplus(3)      
num               15

*/
}
var result = numPlus(3);
console.log('result is', result);
var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
   /*
Fragmento de código 4

Variable        Values 
result          logAndReturn(10)
num              15 


*/
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
   /*
Fragmento de código 5

Variable        Values 
result           timesTwo(10)
y                num*2
*/
}
var result = timesTwo(10);
console.log(result);
console.log(num);
function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
    /*
Fragmento de código 6

Variable         values 
result           timesTwoAgain(3) + timesTwoAgain(5)


*/
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
function sumNums(num1, num2) {  
   return num1+num2;
   /*
Fragmento de código 7

Variable        Values 



*/
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
function printSumNums(num1, num2) {
   console.log(num1);   
   return num1+num2;
   /*
Fragmento de código 8

Variable       Values 
sum            num1 + num2;

*/
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
    /*
Fragmento de código 9

Variable          Values 
result            sumNums(2,3) + sumNums(3,5)
sum               num1 + num2
*/

}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result); 
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
    /*
Fragmento de código 10

Variable          Values 
result            sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3))   

*/
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);