/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.markovChain = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const words = this.words
    const uniqueWords = new Set(words)
    let markovChain = {}

    uniqueWords.forEach(buildChainLink)

    function buildChainLink(word) {
      markovChain[word] = [];
      for (let i=0; i<words.length; i++) {
        let currentWord = words[i]
        if (currentWord === word) {
          let possibleWord = words[i+1]
          if (!possibleWord) {
            markovChain[word].push(null)
          } else {
            markovChain[word].push(possibleWord)
          }
        }
      }
    }
    return markovChain
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

module.exports = MarkovMachine