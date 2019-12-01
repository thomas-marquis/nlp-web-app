import { map, toLower, compose } from "ramda";
import { RegexpTokenizer } from "natural";

const tokenizer = new RegexpTokenizer(/\w+/);

export default function prepareText(text) {
  return compose(tokenize, toLowerCase)(text);
}

function toLowerCase(text) {
  return toLower(text);
}

function tokenize(text) {
  return tokenizer.tokenize(text);
}

function removeStopWords(tokenArray) {}

function lamatizeTokens(tokenArray) {}
