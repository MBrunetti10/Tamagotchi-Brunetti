// bar indicators
const hungerIndicator = document.getElementById("hunger-indicator")
const boredomIndicator = document.getElementById("boredom-indicator")
const sleepinessIndicator = document.getElementById("sleepiness-indicator")
const ageIndicator = document.getElementById("age-indicator")
const heading = document.getElementById("heading")
//game buttons

const feedBtn = document.getElementById("feed-btn")
const playBtn = document.getElementById("play-btn")
const sleepBtn = document.getElementById("sleep-btn")
const avatar = document.getElementById("avatar")

// set our class.
class Tamagotchi {
    constructor(name) {
        this.name = name
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
    }
//hunger will not do negatvies.
    feed() {
        if(this.hunger -2 <=1){
            this.hunger =1
        }else{
            this.hunger = this.hunger- 2;
        }

    }
    // as time goes on
    starve() {
        this.hunger = this.hunger + 2
    }
    sleep() {
        if(this.sleepiness -2 <=1){
            this.sleepiness =1
        }else{
            this.sleepiness = this.sleepiness -2;
        }

    }
    tired() {
        this.sleepiness = this.sleepiness + 2
    }
    play() {
        if(this.boredom -2 <=1){
            this.boredom =1
        }else{
            this.boredom = this.boredom - 2;
        }
    }
    bored() {
        this.boredom = this.boredom + 2
    }
}

// Beginning the name as blank.
let name = ""

// Promp Begins
while (name.trim() === "") {
    name = prompt("Please type your name.");
}
// instantiating the class.
const newTamagotchi = new Tamagotchi(name)
function startGame() {
let seconds = 0
    function updateUI() {
        hungerIndicator.innerHTML = newTamagotchi.hunger
        boredomIndicator.innerHTML = newTamagotchi.boredom
        sleepinessIndicator.innerHTML = newTamagotchi.sleepiness
        ageIndicator.innerHTML = newTamagotchi.age
    }
    updateUI();

    function checkEnd(){
        //when the fox turns 10 you win the game.
        // if any metric reaches 10, you lose.
        if(newTamagotchi.age === 10){
            alert("You win, baby!")
            clearInterval(interval)
            avatar.classList.remove("animate")
        }
        if(newTamagotchi.boredom >= 10){
            alert("Your pet hates you. RIP")
            clearInterval(interval)
            avatar.classList.remove("animate")
        }
        if(newTamagotchi.sleepiness >= 10 ){
            alert("Your pet has died from exhaustion")
            clearInterval(interval)
            avatar.classList.remove("animate")
        }
        if(newTamagotchi.hunger >= 10 ){
            alert("Your pet has died from starvation")
            clearInterval(interval)
            avatar.classList.remove("animate")
        }
    }
    
    // have the buttons make the hunger go down.
    function func(){
        seconds+= 1
        console.log(seconds)
       //every 3 seconds
        if (seconds%3==0){
            newTamagotchi.starve()
            newTamagotchi.bored()
            newTamagotchi.tired()
            updateUI()
        }   
        if (seconds%15==0){
            newTamagotchi.age += 1
            updateUI()
        }
        //changing to fox at age 5; he's a big boy!
        if(newTamagotchi.age === 5){
            avatar.innerHTML = "&#129418;"
        }
        checkEnd()
    }

    let interval = setInterval(func, 1000)

    // add a timer every 3 seconds.
    //listing for our function
    feedBtn.addEventListener("click", () => {
        newTamagotchi.feed()
        updateUI()
    })
    playBtn.addEventListener("click", () => {
        newTamagotchi.play()
        updateUI()
        console.log(newTamagotchi)
    })
    sleepBtn.addEventListener("click", () => {
        newTamagotchi.sleep()
        updateUI()
        console.log(newTamagotchi)
    })
}

startGame()


