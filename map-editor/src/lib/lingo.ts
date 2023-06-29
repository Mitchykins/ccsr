enum TokenType {
  LEFT_BRACKET,
  RIGHT_BRACKET,
  IDENTIFIER,
  NUMBER,
  STRING,
  COMMA,
  COLON,
  WHITESPACE,
}

const tokenInfo = [
  {
    type: TokenType.LEFT_BRACKET,
    regex: /^\[/,
  },
  {
    type: TokenType.RIGHT_BRACKET,
    regex: /^\]/,
  },
  {
    type: TokenType.IDENTIFIER,
    regex: /^(#[^\s,:\[\]]+)/,
  },
  {
    type: TokenType.NUMBER,
    regex: /^(\d+)/,
  },
  {
    type: TokenType.STRING,
    regex: /^(\"[^\"]*\")/,
  },
  {
    type: TokenType.COMMA,
    regex: /^,/,
  },
  {
    type: TokenType.COLON,
    regex: /^:/,
  },
  {
    type: TokenType.WHITESPACE,
    regex: /^(\s+)/,
  },
];

interface Token {
  type: TokenType;
  value: string;
}

interface LingoDataType {
  toJson: () => any;
}

class LingoNumber implements LingoDataType {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  toJson(): number {
    return this.value;
  }
}

class LingoString implements LingoDataType {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  toJson(): string {
    return this.value;
  }
}

class LingoIdentifier extends LingoString {}

class LingoArray implements LingoDataType {
  values: LingoDataType[] = [];

  toJson(): any[] {
    return this.values.map((x) => x.toJson());
  }
}

interface LingoObjectEntry {
  key: LingoIdentifier;
  value: LingoDataType;
}

class LingoObject implements LingoDataType {
  values: LingoObjectEntry[] = [];

  toJson(): any {
    const json = {};
    for (const entry of this.values) {
      json[entry.key.toJson()] = entry.value.toJson();
    }
    return json;
  }
}

/*
    Takes a lingo object and parses it into tokens
*/
function tokenize(source: string) {
  const tokens: Token[] = [];

  while (source.length > 0) {
    let parsed = false;
    for (const token of tokenInfo) {
      const match = source.match(token.regex);
      if (match) {
        parsed = true;
        const text = match[0];
        source = source.slice(text.length, source.length);

        // ignore whitespace
        if (token.type !== TokenType.WHITESPACE) {
          tokens.push({
            type: token.type,
            value: match[0],
          });
        }

        break;
      }
    }
    if (!parsed) {
      throw new Error(
        "error parsing lingo string at " + source.slice(0, 20) + "..."
      );
    }
  }

  return tokens;
}

export function LingoToJSON(source: string) {
  const json = {};
  const tokens = tokenize(source);
  return lingoArray(tokens);
}

function lingoArray(tokens: Token[]) {
  console.log(tokens);
  const array = [];
  let index = 0;

  const first = tokens[index];

  if (first.type !== TokenType.LEFT_BRACKET) {
    err("Failure to parse lingo array: " + first.value);
  }

  return array;
}

function lingoObject(tokens: Token[]) {
  const jsonObject = {};

  const first = tokens[0];

  if (first.type !== TokenType.LEFT_BRACKET) {
    err("error parsing lingo object: " + first.value);
  }
  const next = tokens[1];

  while (next.type !== TokenType.RIGHT_BRACKET) {
    //
  }

  return jsonObject;
}

function err(message: string) {
  throw new Error(message);
}

function lingoKeyValue(tokens: Token[]): { key: string; value: any } {
  return { key: "a", value: "test" };
  //
}
