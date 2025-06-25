const removeFromArray = function (arr, ...extras) {
    return arr.filter((item) => !extras.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
