class Tamagotchi {
    constructor(name) {
        this.name = name
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0  
    }
}
let name = ""

while (name.trim() === "") {
    name = prompt("Please type your name.");
  }
const newTamagotchi = new Tamagotchi(name)
let hunger = document.get4ElementById("hunger")


let metrics = []
function feedTime() {
    newTamagotchi.hunger++;
    newTamagotchi.points+= 1;
    hunger.value = newTamagotchi.hunger.toString()
    alert("You have eaten! Here's 1 point " + " Points Earned: " + newTamagotchi.points + "  Food eaten: " + newTamagotchi.hunger);
    console.log("hello")
}

const feedButton= document.getElementById("feedTime")
feedButton.addEventListener("click", feedTime)

