var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var li = document.querySelector("li");
// li.classList.add("done");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li,deleteButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));	
	input.value = "";
	deleteButton.classList.add("deleteClass");
	deleteButton.innerHTML="delete";
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

function toggleDoneAfterClick(element){
	if(element.target.className === "taskClass"){
		element.target.classList.add("done");
	}
	else if(element.target.className === "taskClass done"){
		element.target.classList.toggle("done");
	}
}

function deleteListElementAfterClick(element){
	if(element.target.className === "deleteClass"){
		element.target.parentElement.remove();
	}
}

function handleUIClick(element){
	toggleDoneAfterClick(element);
	deleteListElementAfterClick(element);
}


ul.addEventListener("click", handleUIClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);