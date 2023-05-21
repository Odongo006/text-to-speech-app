// Function to speak the text
function speakText() {
    const textInput = document.getElementById('text-input').value;
    const utterance = new SpeechSynthesisUtterance(textInput);
    speechSynthesis.speak(utterance);
  }
  
  // Event listener for the Speak button
  const speakButton = document.getElementById('speak-button');
  speakButton.addEventListener('click', speakText);
  