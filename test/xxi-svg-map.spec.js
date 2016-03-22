import chai from 'chai';
import d3 from 'd3';
import jsdom from 'jsdom';
import SVGMap from '../src';
import sinon from 'sinon';

var xhr = sinon.useFakeXMLHttpRequest();
var api = require('../data/world-110m.json');
// var api = '/hello';

chai.expect();

global.document = jsdom.jsdom('<!doctype html><html><body><div id="selector"></div></body></html>');
global.window = document.parentWindow;

global.XMLHttpRequest = xhr;

const expect = chai.expect;

describe('Given an instance of an SVGMAp', function () {

  var map;

  before(function () {

    var div = document.querySelector('#selector');
    var d3elem = d3.select(div);

    map = new SVGMap(d3elem, {
      width: 100,
      height: 200,
      file: api
    });

  });

  describe('browser setup', function () {
    it('should have a document', () => {
      expect(document).to.not.be.null;
    });

    it('should have a div#selector', () => {
      var query = document.querySelector('div');

      expect(query).to.not.be.null;
    });

  });

  describe('when I create a new object', function () {
    it('should be a new object', () => {
      var newMap = new SVGMap('#selector', {
        width: 100,
        height: 200,
        file: api
      });

      expect(newMap).to.not.be.null;
    });

    it('should throw an error if there is no selector', function () {
      var fn = function () {
        map = new SVGMap('', { width: 100, height: 200});
      };

      expect(fn).to.throw(Error);
    });

    it('should throw if no associated file is specified', function () {
      var fn = function () {
        map = new SVGMap('#selector', {
          width: 100,
          height: 200
        });
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

    it('should return its object', function () {
      expect(map.object).to.not.be.null;
    });

    it('should return its projection', function () {
      expect(map.projection).to.not.be.null;
    });

  });

  describe('when I initialize it', function () {

    it('should return a promise if no callback are given', function () {
      var type = map.init();

      expect(type).to.be.a('promise');

      type.then((world) => {
        expect(world).to.not.be.null;
      }).catch((err) => {
        console.log(err);
      });

    });

  });

  describe('when I fetch data it', function () {
    it('should return world data', function (done) {

      map.fetchData()
        .then((resp) => {
          expect(resp).to.be.a('object');
          expect(resp).to.have.deep.property('objects.countries');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    it('should create an svg from the world data', function (done) {
      map.fetchData()
        .then(map.createSVG)
        .then((data) => {
          done();
        }).catch((err) => {
          done(err);
        });
    });

    it('should resolve with an object with { map, svg } properties', function (done) {
      map.fetchData()
        .then(map.createSVG)
        .then((data) => {
          expect(data).to.have.property('map');
          expect(data).to.have.property('svg');
          done();
        }).catch((err) => {
          done(err);
        });
    });

  });

});
