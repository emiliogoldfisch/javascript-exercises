/*
convert given array to string using Array.join()
then remove given value with replace(searchValue, '')
convert string back to array using String.split('separator')
*/

// const removeFromArray = function(array, value) {
//     let string = array.join();
//     let stringValue = value.toString();
//     let newString = string.replace(stringValue, '');
//     let newArray = newString.split(',');
//     return newArray;
// };

/*
Find argument in array
if argument exists in array
    remove element from array
*/

/*
Remove specific elements in array
*/

/* Using splice():
if argument == any element in array
    find element position
    splice at element position
*/

// doesn't seem to work like this
// I think arguments reflects both arguments array and value
// function removeFromArray(array, value) {
//     // find value in array
//     for(i = 0; i <= array.length - 1; i++) {
//         for(j = 0; j < arguments.length; j++) {
//             if(array[i] == arguments[j]) {
//                 // this shifts all indexes to -1
//                 array.splice(i, 1);
//                 // in order to check element that was shifted in index by -1
//                 // happens only if a splice happened
//                 i--;
//                 console.log(i);
//                 console.log(array);
//             }
//         }
//     }
//     return array;
// }

/* 
doesn't work right, removes all values from arrayArg.
this is because array contains a reference to arrayArg instead of the 
array values.
also, valueArray still contains all arguments of the function
*/
// function removeFromArray(arrayArg, valueArg) {
//     // convert arguments object into an array
//     let argumentsArray = Array.from(arguments);
//     // get array argument from argumentsArray
//     let array = argumentsArray.slice(0, 1);
//     // define array for valueArg
//     let valueArray = argumentsArray;    
//     // loop through array
//     for(i = 0; i <= array.length - 1; i++) {
//         // loop through valueArray
//         for(j = 0; j <= valueArray.length - 1; j++) {
//             if(array[i] == valueArray[j]) {
//                 array.splice(i, 1);
//                 i--;
//             }
//         }
//     }
//     return array;
// }


function removeFromArray(arrayArg, valueArg) {  
    // convert arguments into an array
    // it contains a reference to the array of arrayArg argument and
    // the values of valueArg
    let argumentsArray = Array.from(arguments);

    // create a new array containing a reference to arrayArg
    let array = argumentsArray.slice(0, 1);
    // convert array containing reference into an array containing values of
    // arrayArg
    array = Array.from(array[0]);

    // create a new array containing values of valueArg
    let valueArray = argumentsArray.slice(1);

    for(i = 0; i <= array.length - 1; i++) {
        for(j = 0; j <= valueArray.length; j++) {
            if(array[i] === valueArray[j]) {
                array.splice(i, 1);
                // to account for elements of array shifting in index by -1,
                // when spliced
                i--;
                // has to break inner loop because i == -1
                // begin looping with element that is now at array[0]
                break;
            }
        }
        // to prevent inifite loop when array.length == 0
        if(array.length == 0) {
            break;
        }
    }
    return array;
}

function otherTest(arrayArg, valueArg) {
    let valueArray = valueArg.split(', ');
    console.log(arrayArg);
    console.log(valueArray);
}

// Do not edit below this line
module.exports = removeFromArray;
