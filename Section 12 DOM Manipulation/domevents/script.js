var button = document.getElementById("enter");
var deleteButton = document.getElementById("delete1");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
li.classList.add("done");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createDeleteButton(li);
}

function createDeleteButton(li){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));
	li.appendChild(button);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneAfterClick(){
	li.classList.toggle("done");
}

function deleteListElementAfterClick(){
	deleteButton.parentElement.remove();
}

li.addEventListener("click", toggleDoneAfterClick);

button.addEventListener("click", addListAfterClick);

deleteButton.addEventListener("click", deleteListElementAfterClick);

input.addEventListener("keypress", addListAfterKeypress);