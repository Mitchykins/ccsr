export class Lingo {
  static toJSON(lingo: string) {
    let res = lingo.replaceAll("#", "");
    console.log(res);
  }
}
