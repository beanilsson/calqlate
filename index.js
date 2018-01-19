/**
 * Calculate numbers
 *
 * @param  {number}
 * @return {number}
 * @return {string} if error
 */
module.exports = {
    add: function(...numbers) {
        if (numbers.length <= 1){
            return 'At least two values must be provided';
        }
        var result = 0;
        numbers.forEach(function (number){
            result += number;
        });
        return result;
    },
    subtract: function(...numbers) {
        if (numbers.length <= 1){
            return 'At least two values must be provided';
        }
        var result = numbers[0];
        numbers.forEach(function (number, i){
            if (i == 0){
                return;
            }
            result -= number;
        });
        return result;
    },
    multiply: function(...numbers) {
        if (numbers.length <= 1){
            return 'At least two values must be provided';
        }
        var result = numbers[0];
        numbers.forEach(function (number, i){
            if (i == 0){
                return;
            }
            result *= number;
        });
        return result;
    },
    divide: function(...numbers) {
        if (numbers.length <= 1){
            return 'At least two values must be provided';
        }
        var result = numbers[0];
        numbers.forEach(function (number, i){
            if (i == 0){
                return;
            }
            result /= number;
        });
        return result;
    },
    squareArea: function(a, b, ...c) {
        if (c.length > 0){
            return 'Only two values required';
        }
        var result;
        if (a === undefined && b === undefined){
            return 'At least one value must be provided';
        }else if (a !== undefined && b === undefined){
            result = a * a;
        }else {
            result = a * b;
        }
        return result;
    },
    squarePerimiter: function(a, b, ...c) {
        if (c.length > 0){
            return 'Only two values required';
        }
        var result;
        if (a === undefined && b === undefined){
            return 'At least one value must be provided';
        }else if (a !== undefined && b === undefined){
            result = (a * 2) + (a * 2);
        }else {
            result = (a * 2) + (b * 2);
        }
        return result;
    },
    squareDiagonalLength: function(a, b, ...c) {
        if (c.length > 0){
            return 'Only two values required';
        }
        var result;
        if (a === undefined && b === undefined){
            return 'At least one value must be provided';
        }else if (a !== undefined && b === undefined){
            result = a * Math.sqrt(2);
        }else {
            result = Math.sqrt((a * a) + (b * b));
        }
        return result;
    }
};
