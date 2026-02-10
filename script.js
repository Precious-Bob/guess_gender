async function guessGender(userGuess) {
  const nameInput = document.getElementById("nameInput");
  const resultText = document.getElementById("result");

  const name = nameInput.value.trim();

  if (!name) {
    resultText.textContent = "Please enter a name";
    return;
  }

  resultText.textContent = "Checking...";

  try {
    const response = await fetch(`https://api.genderize.io/?name=${name}`);

    const data = await response.json();

    if (!data.gender) {
      resultText.textContent = "Gender could not be determined";
      return;
    }

    if (data.gender === userGuess) {
      resultText.textContent = "✅ Correct!";
    } else {
      resultText.textContent = "❌ Wrong!";
    }
  } catch (error) {
    resultText.textContent = "Something went wrong";
  }
}
