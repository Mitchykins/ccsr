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
  const array = [];
  let index = 0;

  const first = tokens[index];

  if (first.type !== TokenType.LEFT_BRACKET) {
    throw new Error("Failure to parse lingo array: " + first.value);
  }

  return array;
}

function lingoKeyValue(tokens: Token[]) {
  //
}
