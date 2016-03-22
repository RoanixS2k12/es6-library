import d3 from 'd3';
require('d3-geo-projection')(d3);
// import topojson from 'topojson';

export default class SVGMap {

  constructor(selector, {
        file,
        width,
        height,
        scale = 135,
        center = [70, -35],
        ...options}) {

    if (selector === '') {
      throw new Error('There has to be a selector');
    }

    this._selector = selector;
    this._file = file;
    this._width = width;
    this._height = height;

    // Creating the base of the projection
    this._projection = d3.geo.bromley()
                            .center(center)
                            .scale(scale);

    this._path = d3.geo.path().projection(this.projection);

  }

  get name() { return this._name; }
  get width() { return this._width; }
  get height() { return this._height; }
  get selector() { return this._selector; }
  get projection() { return this._projection; }

}
