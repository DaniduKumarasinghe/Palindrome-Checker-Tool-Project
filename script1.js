document.getElementById('check-btn').addEventListener('click', () => {
  const inputEl = document.getElementById('text-input');
  const resultEl = document.getElementById('result');
  const input = inputEl.value;

  // Use correct regex to clean input
  const cleaned = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');

  if (!cleaned) {
    resultEl.textContent = 'Please enter valid text.';
    resultEl.className = 'result show not-palindrome';
  } else if (cleaned === reversed) {
    resultEl.textContent = 'Palindrome';
    resultEl.className = 'result show palindrome';
  } else {
    resultEl.textContent = 'Not a Palindrome';
    resultEl.className = 'result show not-palindrome';
  }
});

