
export default class SVGMap {

  constructor(selector, { width, height }) {

    if (selector === '') {
      throw new Error('There has to be a selector');
    }

    this._selector = selector;
    this._name = 'SVGMap';
    this._width = width;
    this._height = height;
  }

  get name() { return this._name; }
  get width() { return this._width; }
  get height() { return this._height; }
  get selector() { return this._selector; }
  get test() { return 'test'; }

}
