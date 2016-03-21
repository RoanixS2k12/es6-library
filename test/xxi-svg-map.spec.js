import chai from 'chai';
import SVGMap from '../lib/xxi-svg-map.js';

chai.expect();

const expect = chai.expect;

var lib;

describe('Given an instance of my library', function () {
  before(function () {
    lib = new SVGMap('', {
            width : 100,
            height: 200
          });
  });

  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('SVGMap');
    });
  });

  describe('when I need to know what it looks like', function () {
    it('should return its width', function() {
      expect(lib.width).to.be.equal(100);
    });

    it('should return its height', function() {
      expect(lib.height).to.be.equal(200);
    });
  });

});
