import chai from 'chai';
import SVGMap from '../src';

chai.expect();

const expect = chai.expect;

var map;

describe('Given an instance of my library', function () {
  before(function () {
    map = new SVGMap('#selector', {
            width : 100,
            height: 200
          });
  });

  describe('when I create a new object', function() {
    it('should be a new object', () => {
      var newMap = new SVGMap('#selector', {
                      width : 100,
                      height: 200
                    });
      expect(map).to.not.be.null;
    });

    it('should throw an error if there is no selector', function() {
      var fn = function() { new SVGMap('', { width : 100, height: 200}) };
      expect(fn).to.throw(Error);
    });

  });

  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(map.name).to.be.equal('SVGMap');
    });
  });

  describe('when I need to know what it looks like', function () {
    it('should return its width', function() {
      expect(map.width).to.be.equal(100);
    });

    it('should return its height', function() {
      expect(map.height).to.be.equal(200);
    });

    it('should return its selector', function() {
      expect(map.selector).to.be.equal('#selector');
    });

    it('should return test when calling test()', function() {
      expect(map.test).to.be.equal('test');
    })

  });

});
