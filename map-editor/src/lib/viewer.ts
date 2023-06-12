import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import { Assets, Spritesheet, spritesheetAsset } from "pixi.js";

export class Viewer {
  app: PIXI.Application;
  div: HTMLElement;
  sheet: PIXI.Spritesheet;
  viewport: Viewport;

  constructor() {
    this.app = new PIXI.Application({
      backgroundColor: 0xff00ff,
      width: 100,
      height: 100,
    });

    this.viewport = new Viewport({
      events: this.app.renderer.events,
    });

    this.app.stage.addChild(this.viewport);

    this.viewport.drag().pinch().wheel(); // .decelerate();
  }

  public async loadTextures(json: string) {
    this.sheet = await Assets.load(json);

    const sprite = new PIXI.Sprite(
      this.sheet.textures["summer.instructs.01.png"]
    );

    this.viewport.addChild(sprite);
  }

  onResize() {
    console.log("Resizing viewer...");
    const w = this.div.clientWidth;
    const h = this.div.clientHeight;
    this.app.renderer.resize(w, h);
  }
}
