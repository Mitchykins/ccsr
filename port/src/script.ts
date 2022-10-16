import { Game } from "./game";

export abstract class EpisodeScript {
  public game: Game;

  abstract init(): void;
  abstract onDoor(nextMap: string): void;

  constructor(game: Game) {
    this.game = game;
  }
}
