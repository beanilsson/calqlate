var should = require('chai').should(),
    calqlate = require('../index'),
    add = calqlate.add,
    subtract = calqlate.subtract,
    multiply = calqlate.multiply,
    divide = calqlate.divide,
    squareArea = calqlate.squareArea,
    squarePerimiter = calqlate.squarePerimiter,
    squareDiagonalLength = calqlate.squareDiagonalLength;

describe('#add', function() {
    it('adds all plain numbers provided', function() {
        add(1, 1, 2).should.equal(4);
    });

    it('adds all numbers provided within variables', function() {
        var a = 1;
        var b = 2;
        var c = 1;
        add(a, b, c).should.equal(4);
    });

    it('adds all numbers provided within variables and plain numbers', function() {
        var a = 1;
        var b = 2;
        add(a, b, 1).should.equal(4);
    });

    it('prints error message if only one number is provided', function() {
        add(1).should.equal('At least two values must be provided');
    });

    it('prints error message if no number is provided', function() {
        add().should.equal('At least two values must be provided');
    });
});

describe('#subtract', function() {
    it('subtracts all plain numbers provided', function() {
        subtract(50, 10, 5).should.equal(35);
    });

    it('subtracts all numbers provided within variables', function() {
        var a = 1;
        var b = 2;
        var c = 1;
        subtract(a, b, c).should.equal(-2);
    });

    it('subtracts all numbers provided within variables and plain numbers', function() {
        var a = 1;
        var b = 2;
        subtract(a, b, 1).should.equal(-2);
    });

    it('prints error message if only one number is provided', function() {
        subtract(1).should.equal('At least two values must be provided');
    });

    it('prints error message if no number is provided', function() {
        subtract().should.equal('At least two values must be provided');
    });
});

describe('#multiply', function() {
    it('multiplies all plain numbers provided', function() {
        multiply(50, 10, 5).should.equal(2500);
    });

    it('multiplies all numbers provided within variables', function() {
        var a = 1;
        var b = 2;
        var c = 3;
        multiply(a, b, c).should.equal(6);
    });

    it('multiplies all numbers provided within variables and plain numbers', function() {
        var a = 1;
        var b = 2;
        multiply(a, b, 3).should.equal(6);
    });

    it('prints error message if only one number is provided', function() {
        multiply(1).should.equal('At least two values must be provided');
    });

    it('prints error message if no number is provided', function() {
        multiply().should.equal('At least two values must be provided');
    });
});

describe('#divide', function() {
    it('divides all plain numbers provided', function() {
        divide(50, 2, 5).should.equal(5);
    });

    it('divides all numbers provided within variables', function() {
        var a = 60;
        var b = 2;
        var c = 3;
        divide(a, b, c).should.equal(10);
    });

    it('divides all numbers provided within variables and plain numbers', function() {
        var a = 6;
        var b = 2;
        divide(a, b, 3).should.equal(1);
    });

    it('prints error message if only one number is provided', function() {
        divide(1).should.equal('At least two values must be provided');
    });

    it('prints error message if no number is provided', function() {
        divide().should.equal('At least two values must be provided');
    });
});

describe('#square area', function() {
    it('calculates the area given plain numbers', function() {
        squareArea(50, 2).should.equal(100);
    });

    it('calculates the area given variables', function() {
        var a = 60;
        var b = 2;
        squareArea(a, b).should.equal(120);
    });

    it('calculates the area given both variables and plain numbers', function() {
        var a = 6;
        squareArea(a, 3).should.equal(18);
    });

    it('calculates the area if only one value is provided', function() {
        squareArea(2).should.equal(4);
    });

    it('prints error message if no number is provided', function() {
        squareArea().should.equal('At least one value must be provided');
    });

    it('prints error message if more than two numbers are provided', function() {
        squareArea(2, 3, 4).should.equal('Only two values required');
    });
});

describe('#square perimiter', function() {
    it('calculates the perimiter given plain numbers', function() {
        squarePerimiter(50, 2).should.equal(104);
    });

    it('calculates the perimiter given variables', function() {
        var a = 60;
        var b = 2;
        squarePerimiter(a, b).should.equal(124);
    });

    it('calculates the perimiter given both variables and plain numbers', function() {
        var a = 6;
        squarePerimiter(a, 3).should.equal(18);
    });

    it('calculates the perimiter if only one value is provided', function() {
        squarePerimiter(3).should.equal(12);
    });

    it('prints error message if no number is provided', function() {
        squarePerimiter().should.equal('At least one value must be provided');
    });

    it('prints error message if more than two numbers are provided', function() {
        squarePerimiter(2, 3, 4).should.equal('Only two values required');
    });
});

describe('#square diagonal length', function() {
    it('calculates the diagonal length given plain numbers', function() {
        squareDiagonalLength(50, 2).should.equal(50.039984012787215);
    });

    it('calculates the diagonal length given variables', function() {
        var a = 60;
        var b = 2;
        squareDiagonalLength(a, b).should.equal(60.03332407921454);
    });

    it('calculates the diagonalLength given both variables and plain numbers', function() {
        var a = 6;
        squareDiagonalLength(a, 3).should.equal(6.708203932499369);
    });

    it('calculates the diagonal length if only one value is provided', function() {
        squareDiagonalLength(10).should.equal(14.142135623730951);
    });

    it('prints error message if no number is provided', function() {
        squareDiagonalLength().should.equal('At least one value must be provided');
    });

    it('prints error message if more than two numbers are provided', function() {
        squareDiagonalLength(2, 3, 4).should.equal('Only two values required');
    });
});
