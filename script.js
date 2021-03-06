const textarea = document.getElementById("textarea")
const tagsDiv = document.getElementById("tags")

textarea.focus()

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value)

    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.value = ""
      }, 10)
      randomPick()
    }
})

function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== "")
                                 .map(tag => tag.trim())
    tagsDiv.innerHTML = ""

    tags.forEach(tag => {
      const tagEl = document.createElement("span")
      tagEl.classList.add("tag")
      tagEl.innerText = tag
      tagsDiv.appendChild(tagEl)
    })  
}

function randomPick() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlight(randomTag)

        setTimeout(() => {
            unHighlight(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlight(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag) {
    tag.classList.add("highlight")
}

function unHighlight(tag) {
    tag.classList.remove("highlight")
}