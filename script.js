let root = document.getElementById("root")
let textArea = document.createElement("textarea")
let submitBtn = document.createElement("button")
submitBtn.textContent = "Submit"

root.appendChild(textArea)
root.appendChild(submitBtn)

submitBtn.addEventListener("click", processUserInput)

let wordFrequency = {}

function processUserInput() {
    let content = textArea.value
    let words = content.toLowerCase().split(" ")
    wordFrequency = {}
    
    for (word of words) {
        if (wordFrequency[word] != undefined) {
            wordFrequency[word] += 1
        } else {
            wordFrequency[word] = 1
        }
    }
    console.log(wordFrequency)
}