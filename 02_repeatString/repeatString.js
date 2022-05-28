const repeatString = function(string, number) {
    if(number >= 0) {
        let base = '';
        for (i = 1; i <= number; i++) {
            base += string;
        }
        return base;
    }
    else {
        return('ERROR');
    }
};

// Do not edit below this line
module.exports = repeatString;
