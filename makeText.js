/** Command-line tool to generate Markov text. */
const MarkovMachine = require('./markov')
const fs = require('fs');
const process = require('process');
const axios = require('axios');

function handleOutput(text) {
    newMarkov = new MarkovMachine(text)
    console.log(newMarkov.makeText())
  }
  
  /** read file at path and print it out. */
  
  function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
      } else {
        handleOutput(data);
      }
    });
  }
  
  /** read page at URL and print it out. */
  
  async function webCat(url) {
    try {
      let resp = await axios.get(url);
      handleOutput(resp.data, out);
    } catch (err) {
      console.error(`Error fetching ${url}: ${err}`);
      process.exit(1);
    }
  }
  
  let path;
  let out;
  
  if (process.argv[2] === 'file') {
    cat(process.argv[3])
  } else {
    webCat(process.argv[3])
  }