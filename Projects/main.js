function toggleDivSize(button) {
  let projectCard = button.parentElement;
  projectCard.classList.toggle("expanded");
  if (projectCard.classList.contains("expanded")) {
    button.textContent = "Less";
  } else {
    button.textContent = "More";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the div element
  let copyEmail = document.getElementById("copyEmail");

  // Add a click event listener to the div
  copyEmail.addEventListener("click", function () {
    // Text to be copied to the clipboard
    let textToCopy = "maddison.wells90@gmail.com";

    // Create a text area element and set its value to the text to be copied
    let textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    // Append the text area to the document
    document.body.appendChild(textArea);

    // Select the text in the text area
    textArea.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the text area from the document
    document.body.removeChild(textArea);

    // Display a notification or perform any other desired action
    alert("Email copied to clipboard: " + textToCopy);
  });
});
