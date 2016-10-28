/*global $*/
// find the total word count in the text submitted
function wordCount(text) {
  return text.split(/\s+/).length;
} 

// find the total of unique words in the text submitted
function uniqueWordsCount(text) {
  // split text into an array
  var words = text.split(/\s+/);
  // create an empty temp array 
  var temp = [];
  // loop through array of words
  for (var i = 0; i < words.length; i++) {
    // check if the word is in the temp array
    var findResult = temp.find(function(word) {
      return word === words[i];
    });
    // add missing word to temp array
    if(findResult === undefined) {
      temp.push(words[i]);
    }
  }
  // return length of temp array
  return temp.length;
}
  
// find the average word length
function averageWordLength(text) {
  // remove spaces from text
  var withoutSpace = text.replace(/ /g,"");
 // console.log(withoutSpace);
  // get length of all inputed text combined
  var totalLength = withoutSpace.length;
 // console.log(totalLength);
  // split text into an array
  var words = text.split(/\s+/);
 // console.log(words);
  // get total number of words in the array
  var numberOfWords = words.length;
 // console.log(numberOfWords);
  // divide the totalLength by the number of words in the array
  return (totalLength / numberOfWords);
}

// find the average sentence length
function averageWordsPerSentense(text) {
  // find the number of sentences
  var sentences = text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|").length;
  //console.log(sentences);
  // split text into an array
  var words = text.split(/\s+/);
  // get the total number of words in the array
  var numberOfWords = words.length;
  // divide numberOfWords by the number of sentences
  return (numberOfWords / sentences);
}


// connect button to functions
$(document).ready(function() {
  $('.js-form button').click(function(event) {
    event.preventDefault();
    var inputText = $('#user-text').val();
    var resultCount = wordCount(inputText);
    var uniqueWords = uniqueWordsCount(inputText);
    var avWordLength = averageWordLength(inputText).toFixed(2);
    var avWordsPerSent = averageWordsPerSentense(inputText);
    console.log(resultCount, uniqueWords, avWordLength, avWordsPerSent);
    $('.hidden').removeClass('hidden');
    $('.js-word-count').text(resultCount);
    $('.js-unique-word-count').text(uniqueWords);
    $('.js-average-word-length').text(avWordLength);
    $('.js-average-sentence-length').text(avWordsPerSent);
    
  });
});
