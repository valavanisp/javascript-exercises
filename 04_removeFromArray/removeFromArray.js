const removeFromArray = function(arr, ...args) {
    
    newArr = [];

    arr.forEach(element => {
        if (!args.includes(element))
        {
            newArr.push(element);
        }
    });
    return newArr;

    //return arr.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
