var should = require('chai').should(),
    calqlate = require('../index'),
    add = calqlate.add;

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
