
export default class SVGMap {

  constructor(selector, { width, height }) {
    this._name = 'SVGMap';
    this._width = width;
    this._height = height;
  }

  get name() { return this._name; }
  get width() { return this._width; }
  get height() { return this._height; }

  set name(value) {
    this._name = value;
  }

}
