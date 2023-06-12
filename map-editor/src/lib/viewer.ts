import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import { Assets, Spritesheet } from "pixi.js";

export class Viewer {
  app: PIXI.Application;
  div: HTMLElement;
  spriteSheet: PIXI.Spritesheet;

  constructor() {
    this.app = new PIXI.Application({
      backgroundColor: 0xff00ff,
      width: 100,
      height: 100,
    });
  }

  public async loadTextures(json: string) {
    this.spriteSheet = await Assets.load(json);
  }

  onResize() {
    console.log("RESIZE!");
    this.app.view.width = this.div.clientWidth;
    this.app.view.height = this.div.clientHeight;
  }
}
