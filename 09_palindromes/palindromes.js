const palindromes = function (string) {
    let processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let newString =  processedString.split("").reverse().join("");

    return newString === processedString;
};

// Do not edit below this line
module.exports = palindromes;
