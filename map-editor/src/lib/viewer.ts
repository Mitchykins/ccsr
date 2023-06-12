import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";

export class Viewer {
  app: PIXI.Application;
  div: HTMLElement;

  constructor() {
    this.app = new PIXI.Application({
      backgroundColor: 0xff00ff,
      width: 100,
      height: 100,
    });
  }

  onResize() {
    console.log("RESIZE!");
    this.app.view.width = this.div.clientWidth;
    this.app.view.height = this.div.clientHeight;
  }
}
