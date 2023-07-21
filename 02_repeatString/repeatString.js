const repeatString = function(str, numTimes) {
    let newStr = '';

    if (numTimes < 0)
    {
        return 'ERROR';
    }

    for (let i = 0; i < numTimes; i++)
    {
        newStr += str;
    }

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
