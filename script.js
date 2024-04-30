 function printAThing(){
   console.log("A thing.");
 }
// Run the code and see nothing happens because all we have done is define the function.
// we also haven't actually invoking a function is the same as calling a function just means pressing enter

// to call a function we need to type the name of the function and then add parentheses()
//printAThing();
//printAThing();
//printAThing();


// function return 
function returnAThing(){
  return "A thing.";
}

let result = returnAThing();
console.log(result);
//console.log(returnAThing);   you can console log the function call itself which means get rid of the middlemen let result and (result) it will look like the code right there. and you want to be able to use it later on because we haven't named it yet.

// Functions can return values or not at all
// If you want to see the value, console log it
// If you don't want to use the value, store it in a variable and then discard it
