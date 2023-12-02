function toggleTextVisibility(button) {
  var hiddenText = button.previousElementSibling;
  hiddenText.classList.toggle("hidden-text");
  if (hiddenText.classList.contains("hidden-text")) {
    button.textContent = "More";
  } else {
    button.textContent = "Less";
  }
}
