/**
 * Created by jarst on 2016-08-31.
 */
var chai = require('chai');
var codeArray = require('./../index');

var should = chai.should();

describe('codeArray', function() {
    describe('fromString', function () {
        var fromString = codeArray.fromString;

        it('should convert string to code array', function () {
            var str = 'BAR';
            var result = fromString(str);

            result.should.be.eql([66, 65, 82]);
        });
        it('should convert string object to code array', function () {
            var str = new String('a');
            var result = fromString(str);

            result.should.be.eql([97]);
        });
        it('should return empty array for empty string', function() {
            var result = fromString('');

            result.should.be.eql([]);
        });
        it('should return empty array for no argument', function() {
            var result = fromString();

            result.should.be.eql([]);
        });
        it('should return empty array for non strings objects', function() {
            var notAString = {'0': 'a', length: 1};
            var result = fromString(notAString);

            result.should.be.eql([]);
        });
    });

    describe('toString', function () {
        var toString = codeArray.toString;

        it('should convert codes array to string', function () {
            var codes = [66, 65, 82];
            var result = toString(codes);

            result.should.be.equal('BAR');
        });
        it('should convert codes array object to string', function () {
            var codes = new Array([97]);
            var result = toString(codes);

            result.should.be.equal('a');
        });
        it('should return empty string for empty array', function() {
            var result = toString([]);

            result.should.be.equal('');
        });
        it('should return empty array for no argument', function() {
            var result = toString();

            result.should.be.equal('');
        });
        it('should return empty string for non arrays', function() {
            var notAnArray = {'0': '65', length: 1};
            var result = toString(notAnArray);

            result.should.be.equal('');
        });
        it('should ignore non-number values in codes array', function() {
            var codes = [97, 'b', '99', '100foo'];
            var result = toString(codes);

            result.should.be.equal('ac');
        });

    });

    describe('toOctets', function() {
        it('should return...', function() {
            var result = codeArray.toOctets('АБВ');

            result.should.be.eql([4, 16, 4, 17, 4, 18]);
        });
        it('should return...', function() {
            var result = codeArray.fromOctets(codeArray.toOctets('АБВ'));

            result.should.be.eql('АБВ');
        });
    });

});
