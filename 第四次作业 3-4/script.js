// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
 
    // task2 启用输入框
    enableTextInput(true);

    // 计时
    startTime = new Date().getTime();
    // get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    // Put the quote into an array of words
    words = quote.split(' ');
    // reset the word index for tracking
    wordIndex = 0;
  
    // UI updates
    // Create an array of span elements so we can set a class
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // Convert into string and set as innerHTML on quote display
    quoteElement.innerHTML = spanWords.join('');
    // Highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
    // Clear any prior messages
    messageElement.innerText = '';
  
    // Setup the textbox
    // Clear the textbox
    typedValueElement.value = '';
    // set focus
    typedValueElement.focus();
    // set the event handler
  
    // Start the timer
    startTime = new Date().getTime();
       // task1 Enable the input event listener
       typedValueElement.addEventListener('input', inputEventListener);
  });
  // at the end of script.js
typedValueElement.addEventListener('input', () => {
    // Get the current word
    const currentWord = words[wordIndex];
    // get the current value
    const typedValue = typedValueElement.value;
  
    if (typedValue === currentWord && wordIndex === words.length - 1) {
      // end of sentence
      // Display success
      const elapsedTime = new Date().getTime() - startTime;
      const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
      messageElement.innerText = message;

      //task2 禁用输入框
    enableTextInput(false);
    // task4 更新和显示高分
    const currentScore = elapsedTime;
    const previousHighScore = getHighScore();

    if (currentScore > previousHighScore) {
        setHighScore(currentScore);
    }

    displayHighScore();
    // task3 展示对话框
    const successModal = document.getElementById('success-modal');
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = message;
    successModal.style.display = 'block';
    const closeModalButton = document.getElementById('close-modal');
closeModalButton.addEventListener('click', () => {
    const successModal = document.getElementById('success-modal');
    successModal.style.display = 'none';
});
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      // end of word
      // clear the typedValueElement for the new word
      typedValueElement.value = '';
      // move to the next word
      wordIndex++;
      // reset the class name for all elements in quote
      for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
      }
      // highlight the new word
      quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
      // currently correct
      // highlight the next word
      typedValueElement.className = '';
    } else {
      // error state
      typedValueElement.className = 'error';
    }
  });
// task2 输入框
function enableTextInput(enabled) {
    typedValueElement.disabled = !enabled;
}
// task4 获取高分
function getHighScore() {
    return localStorage.getItem('highScore') || 0;
}

// 存储高分
function setHighScore(score) {
    localStorage.setItem('highScore', score);
}
// 显示高分
function displayHighScore() {
    const highScoreElement = document.getElementById('high-score');
    const highScore = getHighScore() / 1000; // Divide by 1000
    highScoreElement.innerText = `High Score: ${parseFloat(highScore).toFixed(3)}`;
}
