import chai from 'chai';
import SVGMap from '../src';

chai.expect();

const expect = chai.expect;

var map;

describe('Given an instance of my library', function () {
  before(function () {
    map = new SVGMap('', {
            width : 100,
            height: 200
          });
  });

  describe('when I create a new object', function() {
    it('should be a new object', () => {
      var newMap = new SVGMap('', {
                      width : 100,
                      height: 200
                    });
      expect(map).to.not.be.null;
    });
  });

  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(map.name).to.be.equal('SVGMap');
    });
  });

  describe('when I need to modify the name', function() {
    it('should modify the name', () => {

      map.name = 'NEWMap';
      expect(map.name).to.be.equal('NEWMap');

    });
  });

  describe('when I need to know what it looks like', function () {
    it('should return its width', function() {
      expect(map.width).to.be.equal(100);
    });

    it('should return its height', function() {
      expect(map.height).to.be.equal(200);
    });
  });

});
