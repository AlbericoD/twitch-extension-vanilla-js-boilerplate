export class Render {
  constructor(selector) {
    this._element = document.querySelector(selector);
  }
  update(data) {
    let template = this.template(data);
    this._element.innerHTML = template;
  }
  template(data) {}
}
