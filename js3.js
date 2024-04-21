a=7;b=57;s="8"
add=a+b; 
sub=a-b;
mul=a*b;
div=a/b;
rem=a%b;
let x=4;y=x++;//post increment to x;
let w=6;z=w-- ;//post decrement to x
let n=1; 

console.log(`${a} + ${b} = ${add}`);
console.log(`${a} - ${b} = ${sub}`);
console.log(`${a} * ${b} = ${mul}`)
console.log(`${a} / ${b} = ${div}`)
console.log(`${a} % ${b} = ${rem}`)

console.log(`post incremnet of ${y}  is ${x}`)
console.log(`post decremnet of ${z} is ${w}`);
n%2==0?console.log(`${n} is even`) : console.log(`${n} is odd`)
console.log(`${s} is equal to  ${b} : ${s==b}`)
console.log(`${a} is less than ${b} : ${a<=b}`)
a>=0?console.log(`${a} is positive`):console.log(`${a} is negative` )
a<=b?console.log(`${a} is lessthan ${b}`):console.log(`${a} is equal to ${b}` )
 a!=b?console.log(`${a} is not equal to ${b}`):console.log(`${a} is equal to ${b}` )
console.log(`${n} is between the range of ${a} AND ${b} ${a<=n && n>=b} `)
console.log(`${n} is between the range of ${a} OR ${b} ${a<=n || n<=b} `)



