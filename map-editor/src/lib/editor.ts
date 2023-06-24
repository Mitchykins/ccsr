import type { CCSRWorld } from "./map";
import { Viewer } from "./viewer";

export class Editor {
  public world: CCSRWorld;
  public viewer: Viewer;
  public textureJSON: string;
  public textureImage: string;

  constructor() {
    this.viewer = new Viewer();
  }

  public async loadWorld(url: string) {
    const request = await fetch(url);
    this.world = await request.json();
  }

  public mountViewer(div: HTMLElement) {
    div.appendChild(this.viewer.app.view as HTMLCanvasElement);
    this.viewer.div = div;
  }
}
