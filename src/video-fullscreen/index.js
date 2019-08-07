import { Controller } from './controller';
import './index.css';

window.onload = () => {
  try {
    const controller = new Controller();

    //write logic
    let title = 'Video FullScreen';
    let subtitle = 'Video FullScreen subtitle';
    let list = [];
    let itemsQuantity = 0;

    controller.seTitle(title);
    controller.setSubTitle(subtitle);

    setInterval(() => {
      if (itemsQuantity === 5) {
        itemsQuantity = 0;
        list = [];
      }
      itemsQuantity += 1;
      list = [...list, itemsQuantity];
      controller.updateList(list);
    }, 1000);
  } catch (error) {
    console.error(error);
  }
};
