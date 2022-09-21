let btn = document.querySelector(".addButton");

function addTodo() {
  let input = document.querySelector(".input");
  if (input.value) {
    let container = document.querySelector(".container");

    let newDIv2 = document.createElement("div");
    newDIv2.classList = "class";
    let borderDiv = document.createElement("div");
    borderDiv.style.width = "650px";
    borderDiv.setAttribute("class", "item");

    let div = document.createElement("div");
    div.setAttribute("class", "input_div");

    let newDiv = document.createElement("div");

    newDiv.setAttribute("class", "item_input ");
    let h2 = document.createElement("h2");
    h2.classList = "h2"
    h2.textContent = input.value;
    newDiv.append(h2);
    let div2 = document.createElement("div");
    div2.style.width = "300px";

    let edit = document.createElement("button");
    edit.setAttribute("class", "editButton");
    edit.addEventListener("click", editItem);
    edit.textContent = "Edit";
    let remove = document.createElement("button");
    remove.setAttribute("class", "deleteButton");
    remove.addEventListener("click", removeItem);
    remove.textContent = "Delete";
    div2.append(edit, remove);

    div.append(newDiv, div2);
    newDIv2.append(div, borderDiv);

    container.append(newDIv2);
    input.value = "";
  } else {
    alert("Please enter note first");
  }
}

function removeItem(event) {
  let classes = document.querySelector(".class");
  classes.remove();
}
function editItem() {

   let div = document.querySelector('.class')
   console.log(div)
   let editInput = document.createElement('input')
   editInput.type = "text";
   let value = editInput.value;

   console.log(editInput);
   let input = document.querySelector(".input");
   let h2= document.querySelector('.h2')

   value.textContent = h2
   let editButton = document.querySelector('.editButton')
   editButton.textContent ="save"
   div.append(editInput)
   


}

btn.addEventListener("click", addTodo);
