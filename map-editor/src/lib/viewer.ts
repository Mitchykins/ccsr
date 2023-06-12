import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import { Assets, Spritesheet, spritesheetAsset } from "pixi.js";

export class Viewer {
  app: PIXI.Application;
  div: HTMLElement;
  sheet: PIXI.Spritesheet;

  constructor() {
    this.app = new PIXI.Application({
      backgroundColor: 0xff00ff,
      width: 100,
      height: 100,
    });
  }

  public async loadTextures(json: string) {
    this.sheet = await Assets.load(json);

    const sprite = new PIXI.Sprite(
      this.sheet.textures["summer.instructs.01.png"]
    );

    this.app.stage.addChild(sprite);
  }

  onResize() {
    console.log("Resizing viewer...");
    const w = this.div.clientWidth;
    const h = this.div.clientHeight;
    this.app.view.width = w;
    this.app.view.height = h;
    this.app.renderer.resize(w, h);
  }
}
