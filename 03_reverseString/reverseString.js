const reverseString = function(word) {
    let reversed = "";
    for(i = word.length-1; i >= 0; --i){
        reversed += word.charAt(i);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
