import chai from 'chai';
import SVGMap from '../lib/xxi-svg-map.js';

chai.expect();

const expect = chai.expect;

var lib;

describe('Given an instance of my library', function () {
  before(function () {
    lib = new SVGMap();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('SVGMap');
    });
  });
});
