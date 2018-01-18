var should = require('chai').should(),
    calqlate = require('../index'),
    add = calqlate.add;
subtract = calqlate.subtract,
multiply = calqlate.multiply;

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
        add(1).should.equal('At least two numbers must be provided');
    });

    it('prints error message if no number is provided', function() {
        add().should.equal('At least two numbers must be provided');
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
        subtract(1).should.equal('At least two numbers must be provided');
    });

    it('prints error message if no number is provided', function() {
        subtract().should.equal('At least two numbers must be provided');
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
        multiply(1).should.equal('At least two numbers must be provided');
    });

    it('prints error message if no number is provided', function() {
        multiply().should.equal('At least two numbers must be provided');
    });
});
