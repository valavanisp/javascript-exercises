const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num === 0) return 0;

    let arr = new Array(num);

    arr[0] = 0;
    arr[1] = 1;
    
    for (let i = 2; i <= num; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }

    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
