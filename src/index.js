import d3 from 'd3';
require('d3-geo-projection')(d3);
import topojson from 'topojson';

function setupMap(object, width, height) {

  return new Promise(function (resolve, reject) {

    var svg = object
                .append('svg')
                .attr('width', width)
                .attr('height', height);

    resolve(svg);

  });

}

export default class SVGMap {

  constructor(object, {
        file,
        width,
        height,
        scale = 135,
        center = [70, -35],
        ...options}) {

    if (object === undefined || object === '') {
      throw new Error('There has to be a selector');
    }

    if (file === undefined || file === '') {
      throw new Error('You did not specified a data file');
    }

    this._object = object;
    this._file = file;
    this._width = width;
    this._height = height;

    // Creating the base of the projection
    this._projection = d3.geo.bromley()
                            .center(center)
                            .scale(scale);

    this._path = d3.geo.path().projection(this.projection);
    this.createSVG = this.createSVG.bind(this);
  }

  init() {
    return setupMap(this.object, this.width, this.height)
      .then((svg) => {
        this.svg = svg;
        return svg;
      });
  }

  fetchData() {
    return new Promise((resolve, reject) => {
      resolve(this.file);
    });
  }

  createSVG(world) {
    var g = this.svg.append('g');

    return new Promise((resolve, reject) => {
      // resolve(world);
      g.selectAll('path')
          .data(topojson.feature(world, world.objects.countries).features)
          .enter()
          .append('path')
          .attr('class', function (d) { return `country country-${d.id % 2}`; })
          .attr('d', this.path);

      resolve({ map: this, svg: this.svg});
    });
  }

  get width() { return this._width; }
  get height() { return this._height; }
  get object() { return this._object; }
  get projection() { return this._projection; }
  get file() { return this._file; }

}
