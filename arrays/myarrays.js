var myarray = [1,3,4,5,6,7,9,100,200,201,206] ;
var mysecondarray= [2000,3000];

// find the first element = 9
function mycondition(element)
{
return (element === 9)
}
const found = myarray.findIndex(mycondition);
console.log(found);
// concatenate two arrays. Note that the + operation does not work
var mynewarray= myarray.concat(mysecondarray);
console.log(mynewarray);
// add one ore more values to the end of an array
var newlength = myarray.push(207,208);
console.log( "New array is: " + myarray);
console.log("New Length is: " + newlength)
// remove a value at the end of the array
var removedvalue = myarray.pop();
console.log(myarray);
console.log("Removed value: " + removedvalue  );

// turn array to string. this can aslo be accomplished by adding the array to an empty string
console.log(myarray.toString());
// get the first occurance index in an array based on a value
console.log("index of 201 is: " + myarray.indexOf(201)) ;
//filter an array based on a criteria
console.log(myarray.filter(e=> e >100));
// removing an element of an array at the begining of an array
myarray.shift();
console.log(myarray);
// adding one or more elements to an array at the begining of an array
myarray.unshift(0,1);
console.log(myarray);
// executing a function for each element of an array
myarray.forEach(myexec)
function myexec(element)
{
console.log(element + 1)
}