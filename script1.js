function checkPalindrome() {
  const input = document.getElementById('textInput').value;

  // Normalize input: remove punctuation, spaces, lowercase
  const cleanInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = cleanInput.split('').reverse().join('');
  const result = document.getElementById('result');

  if (cleanInput && cleanInput === reversed) {
    result.textContent = 'Palindrome';
    result.className = 'result show palindrome';
  } else {
    result.textContent = 'Not a Palindrome';
    result.className = 'result show not-palindrome';
  }
}
