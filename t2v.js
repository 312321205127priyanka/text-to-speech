let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    
    // Filter and select the first English voice
    let englishVoices = voices.filter(voice => voice.lang.includes('en'));
    speech.voice = englishVoices[0]; // Set the first English voice

    // Populate the select dropdown with voices, showing only "English" text
    englishVoices.forEach((voice, i) => {
        let displayText = "English"; // Replace the voice name with just "English"
        voiceSelect.options[i] = new Option(displayText, i);
    });
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", function () {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
