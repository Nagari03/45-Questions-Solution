//18. seeing the world : Think of at least five places in the world you do like to visit .
//. store the location in a array. make sure the array is not in alphabetical order .
// print your array in its orginal order 
let places : string [] = ['cape town','dehli','faisalabad','benkok','ahmadabad']
//console. log('original' + places);

//print your  array in alphabatical order without modifiying the actual list .
//console.log('copy ' + [...places].sort());

//show that your aray is still in its orginal order dy printing it 
//console. log('original' + places);

//print your array in revers alphabetical order without changing thre order of the original list.
console.log('copy ' + [...places].sort().reverse);

//show that your array is still in it's original order by printing it again.
console.log('copy ' + [...places].sort().reverse);

//reverse the order of your list. print the array to show that its order has changed.
console. log('original' + places.sort());
//reverse the order of yuor list again . print the list to show it back to it's original order.

console. log('original' + places.sort().reverse);
