import { Render } from '../template/render';
import * as component from '../components';

export class View extends Render {
  template({ title, subtitle, list }) {
    return `
    <div class="configuration-container">
      ${component.title(title)}
      ${component.subtitle(subtitle)}
        <ul class="list">
          ${list
            .map((item) => {
              return `<li class="item">${item}</li>`;
            })
            .join('')}
        </ul>
    </div>
    `;
  }
}
