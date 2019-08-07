import { View } from './viewer';

export class Controller {
  constructor() {
    this._twitch = window.Twitch.ext;
    this._view = new View('#root');
    this._data = {
      title: '',
      subtitle: '',
      list: []
    };
    this._listenPUBSUB();
    this._view.update(this._data);
  }

  seTitle(content) {
    this._data.title = content;
    this._view.update(this._data);
  }
  setSubTitle(content) {
    this._data.subtitle = content;
    this._view.update(this._data);
  }
  updateList(list) {
    this._data.list = list;
    this._view.update(this._data);
  }
  _listenPUBSUB() {
    this._twitch.listen('broadcast', (target, contentType, content) => {
      if (content) {
        const pubsubData = JSON.parse(content);
        // this._view.update(pubsubData.data); //[item E]
      }
    });
  }
}
