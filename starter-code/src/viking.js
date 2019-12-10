// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(hitHealth){
         this.health = this.health - hitHealth
    }
    }
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength)
    this.name = name
    }
    receiveDamage(hitHealth){
        this.health = this.health - hitHealth
        if(this.health > 0){
            return this.name + " has received " + hitHealth + " points of damage"
        }
        else{
            return this.name + " has died in act of combat"
        }
   }
   battleCry(){
    return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
    super(health, strength)
    }
    receiveDamage(hitHealth){
        this.health = this.health - hitHealth
        if(this.health > 0){
            return "A Saxon has received " + hitHealth + " points of damage"
        }
        else{
            return "A Saxon has died in combat"
        }
    }
}
// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        
    }
    saxonAttack(){
        let randomSaxon = Math.floor(Math.random(this.saxonArmy.length) * 1);
        let randomViking = Math.floor(Math.random(this.vikingArmy.length) * 1);
        let trueViking = this.vikingArmy[randomViking]
        let trueSaxon = this.saxonArmy[randomSaxon]
        randomSaxon.receiveDamage() = randomViking.strength 
    }
    showStatus(){
        if(this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survive another day..."
        }
        else if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!"
        }

        else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle."
        }
        }
}

