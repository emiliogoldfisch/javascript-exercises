const sumAll = function(int1, int2) {
    if(int1 < 0 || int2 < 0 || !(Number.isInteger(int1)) || 
            !(Number.isInteger(int2))) {
        return 'ERROR';
    }
    else {
        let array = [];
        let sum;
        if(int1 > int2) {
            for(i = int2; i <= int1; i++) {
                array.push(i);
            }
            sum = array.reduce((total, current) => total + current);
        }
        else if(int2 > int1) {
            for(i = int1; i <= int2; i++) {
                array.push(i);
            }
            sum = array.reduce((total, current) => total + current);
        }
        return sum;
    } 
};

// 2nd try, better because it's simplified
function sumAll2(int1, int2) {
    if(int1 < 0 || int2 < 0 || !(Number.isInteger(int1)) || 
            !(Number.isInteger(int2))) {
        return 'ERROR';
    }
    else {
        // has to be 0, otherwise it's undefined, leading to NaN in the end
        let sum = 0;
        if(int1 > int2) {
            for(i = int2; i <= int1; i++) {
                sum += i;
            }
        }
        else if(int2 > int1) {
            for(i = int1; i <= int2; i++) {
                sum += i;
            }
        }
        return sum;
    }
    
}


// Do not edit below this line
module.exports = sumAll;
