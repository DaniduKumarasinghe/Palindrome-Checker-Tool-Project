function checkPalindrome() {
  const input = document.getElementById("textInput").value;

  // Remove non-alphanumeric characters & convert to lowercase
  const cleaned = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");

  const resultDiv = document.getElementById("result");

  if (cleaned === "") {
    resultDiv.textContent = "Please enter text.";
    resultDiv.className = "result show not-palindrome";
  } else if (cleaned === reversed) {
    resultDiv.textContent = "Palindrome";
    resultDiv.className = "result show palindrome";
  } else {
    resultDiv.textContent = "Not a Palindrome";
    resultDiv.className = "result show not-palindrome";
  }
}
