let root = document.getElementById("root")
let textArea = document.createElement("textarea")
let submitBtn = document.createElement("button")
submitBtn.textContent = "Submit"

root.appendChild(textArea)
root.appendChild(submitBtn)

submitBtn.addEventListener("click", processUserInput)

function processUserInput() {
    console.log("what up son")
}