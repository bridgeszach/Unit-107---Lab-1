module.exports = {
    sayHello: function (text) {
        console.log('Hello There' + text);
    },
    sum: function (num1, num2) {
        return num1 + num2;
    },
    greater: function (num1, num2) {
        //return the greater of num1 and num2
        if (num1 > num2) {
            return num1;
        }
        return num2

    },
    isEven: function (num) {
        // return num % 2 === 0;
        if (num % 2 === 0) {
            return true;
        }
        return false;
    },
    homework: function () {
        //print the first 20 even numbers
        var num = 21;
        for (let i = 0; i < num; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }
};