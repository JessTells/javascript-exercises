const repeatString = function(str, amt) {
    if(amt < 0){
        return "ERROR"
    }
    let s = "";
    for(i = 0; i < amt; ++i){
        s += str;
    };
    return s; 
};

// Do not edit below this line
module.exports = repeatString;
