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
            return 'At least two numbers must be provided'
        }
        var result = 0;
        numbers.forEach(function (number){
            result += number;
        });
        return result;
    }
};
