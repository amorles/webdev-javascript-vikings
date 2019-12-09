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
    constructor(vikingArmy, saxonArmy){
        this.vikingArmy = vikingArmy
        this.saxonArmy = saxonArmy
    }
    addViking(Viking){
    //    vikingArmy.push(Viking)
    }
    addSaxon(){

    }
    vikingAttack(){

    }
    saxonAttack(){

    }
    showStatus(){

    }
}