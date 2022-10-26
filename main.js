// JavaScript source code
//Methods
function greeting() {
    window.alert("Good morning!")
    document.getElementById("greeting").innerHTML = "Oh and incase I don't see ya"
    console.log("Good afternoon, good evening and good night")
}

function changeText() {
    //console.log("I'm over the element.")

    let para = document.getElementById("new-para")

    if (para) {
        para.remove()
    }
    else {
        para = document.createElement("p")
        para.id = "new-para"
        let textNode = document.createTextNode(`With ${actor.getFullName()} as ${characters[0]}`)
        para.appendChild(textNode)
        document.getElementById("title-container").appendChild(para)
    }
}

//variables
var title = "Rick and Morty."
let director = "Sahil Singh."
const releaseYear = 1998

//Arrays and objects
const characters = []
characters.push("Mahesh Sangha.")
const actor = {}
actor.firstName = "Jai"
actor.lastName = "Kothari"
actor.getFullName = function () {
    return this.firstName + " " + this.lastName
}
console.log(actor.getFullName())

const actress = {
    firstName: "Dolly",
    lastName: "Tank",
    getFullName() {
        return this.firstName + " " + this.lastName
    }
}