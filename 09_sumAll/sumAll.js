const sumAll = function(start, end) {
    if(!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0){
        return "ERROR";
    }
    let total = Math.min(start, end);
    for(let i = total + 1; i <= Math.max(start, end); i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
