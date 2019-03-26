'use strict';//не доделано 

const Lam=(...args)=>{
array=[...args];
var max=array[0];
for(let i=0;i<array.length;i++)
{
if(array[i]>max)
{
max=array[i];
}
}
return max;
}

console.log(Lam([1,2,3,4,5]));
console.log(max);