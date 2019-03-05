/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.uniqueWords = new Set(words);
    this.markovChain = this.makeChains();
    // this.text = this.makeText();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const words = this.words
    let markovChain = {}

    this.uniqueWords.forEach(buildChainLink)

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
    // curr_word 
    // curr_key
    // random_word

    // the first time:
      // get random key 
        // add to text

    // while text is less than numwords 
      // get random word from key list 
        // add to text
        // save to curr_key
    
    let uniqueWordsArr = Array.from(this.uniqueWords);
    let randomKeyIdx = Math.floor(Math.random() * (this.uniqueWords.size - 1));
    let randomKey = uniqueWordsArr[randomKeyIdx];
    let currKey = randomKey;
    let text = [currKey];
    let wordListLength = this.markovChain[currKey].length;
    let randomWordIdx = function(){
      return Math.floor(Math.random() * wordListLength)
    }

    console.log(text);

    while (text.length <= numWords){
      let wordList = this.markovChain[currKey];
      console.log('wordList', wordList);
      currKey = wordList[randomWordIdx()];
      if (currKey === null){
        break;
      }
      console.log('currKey', currKey);
      console.log('markov', this.markovChain);
      wordListLength = this.markovChain[currKey].length;
      text.push(currKey); 
    }

    return text.join(' ');
  }
}

module.exports = MarkovMachine