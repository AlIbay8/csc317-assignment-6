let root = document.getElementById("root")
let textArea = document.createElement("textarea")
let submitBtn = document.createElement("button")
submitBtn.textContent = "Submit"

root.appendChild(textArea)
root.appendChild(submitBtn)

submitBtn.addEventListener("click", processInput)



function processInput() {
    let wordFrequency = countWords()
    let sortedWords = sortWords(wordFrequency)
    displayTopWords(sortedWords, wordFrequency)
}

function countWords() {
    let content = textArea.value
    let words = content.toLowerCase().split(" ")
    let wordCounts = {}
    
    for (word of words) {
        if (wordCounts[word] != undefined) {
            wordCounts[word] += 1
        } else {
            wordCounts[word] = 1
        }
    }
    return wordCounts
}

function sortWords(wordCounts = {}) {
    keysSorted = Object.keys(wordCounts).sort(function(a,b){
        if (wordCounts[a]!==wordCounts[b]) {
            return wordCounts[b]-wordCounts[a]
        } else {
            return a < b
        }
    })
    return keysSorted
}

function displayTopWords(sortedKeys = [], wordCounts = {}) {
    for (let i=0; i<5; i++) {
        if (i<sortedKeys.length) {
            console.log(`${sortedKeys[i]}: ${wordCounts[sortedKeys[i]]}`)
        }
    }
}