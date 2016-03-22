import chai from 'chai';
import SVGMap from '../src';

chai.expect();

const expect = chai.expect;

describe('Given an instance of an SVGMAp', function () {

  var map;

  before(function () {
    map = new SVGMap('#selector', {
      width: 100,
      height: 200
    });
  });

  describe('when I create a new object', function () {
    it('should be a new object', () => {
      var newMap = new SVGMap('#selector', {
        width: 100,
        height: 200
      });

      expect(newMap).to.not.be.null;
    });

    it('should throw an error if there is no selector', function () {
      var fn = function () {
        let newMap = new SVGMap('', { width: 100, height: 200});

        console.log(newMap);
      };

      expect(fn).to.throw(Error);
    });

  });

  describe('when I need to know what it looks like', function () {

    it('should return its width', function () {
      expect(map.width).to.be.equal(100);
    });

    it('should return its height', function () {
      expect(map.height).to.be.equal(200);
    });

    it('should return its selector', function () {
      expect(map.selector).to.be.equal('#selector');
    });

    it('should return its projection', function () {
      expect(map.projection).to.not.be.null;
    });

  });

});
