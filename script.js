let root = document.getElementById("root")
let textArea = document.createElement("textarea")
let submitBtn = document.createElement("button")
submitBtn.textContent="Submit"
let table = document.createElement("table")

root.appendChild(textArea)
root.appendChild(submitBtn)
root.appendChild(table)

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
    console.log(wordCounts)
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
    table.textContent = ""
    
    let headerRow = table.insertRow()
    let wordHeader = document.createElement("th")
    let countHeader = document.createElement("th")
    
    wordHeader.textContent = "word_name"
    countHeader.textContent = "word_frequency"

    headerRow.appendChild(wordHeader)
    headerRow.appendChild(countHeader)
    
    for (let i=0; i<5; i++) {
        if (i<sortedKeys.length) {
            let word = document.createElement("td")
            let count = document.createElement("td")
            console.log(`${sortedKeys[i]}: ${wordCounts[sortedKeys[i]]}`)
            let row = table.insertRow()
            
            word.textContent = `${sortedKeys[i]}`
            row.appendChild(word)

            count.textContent = `${wordCounts[sortedKeys[i]]}`
            row.appendChild(count)

        }
    }
}