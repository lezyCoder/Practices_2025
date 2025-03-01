let btn = document.getElementById("btn");
let inputText = document.getElementById("text");
let msgContainer = document.querySelector(".message-container");
function handleText() {
  let text;
  if (inputText.value) {
    text = inputText.value;
  } else {
    alert("Please enter a message");
    return;
  }

  let para = document.createElement("p");
  para.innerText = text;

  // Add a class to style the response message
  para.classList.add("response-message");

  //    Inserting into the message container
  msgContainer.appendChild(para);

  //   Reset the input field
  inputText.value = " ";

}
