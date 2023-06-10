import type { CCSRWorld } from "./map";


export class Editor {
    public world: CCSRWorld;

    public async loadWorld(url: string) {
        const request = await fetch(url);
        this.world = await request.json();
    }
}