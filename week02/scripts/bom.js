const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
button.addEventListener("click", function(){
if (input!==""){
    
const li = document.createElement("li");
const deleteButton = document.createElement("button");
    li.textContent = input.value; 
    deleteButton.textContent = "X";
    li.append(deleteButton);
    list.append(li);
    input.value = "";
    input.focus();
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);})
}
else input.focus();
});

