export class Service {
  constructor() {
    this._service = 'https://my-api-example';
  }
  getData() {
    fetch(this._service)
      .then((response) => {
        // handle response data
        this._createLog(response.statusText);
      })
      .catch((err) => {
        //handle errors
      });
  }
  _createLog(content) {
    console.log(`Remote LOG: ${this._service}${content}`);
  }
}
