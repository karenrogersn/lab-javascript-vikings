// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    //method that works as a function
    return this.strength; //you use return here for example, because it's a consequence bound to the method-function
  }

  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    //this.health += - theDamage --> this.health = this.health + - theDamage
    //this.health -= theDamage --> this.health = this.health - theDamage
  }
}

/*
const soldierKaren = new Soldier(10,5)
const ataqueKaren = soldierKaren.attack()

const soldadoMalo = new Soldier(10,5)
const danoSoldadoMalo = soldadoMalo.attack() // Esto es 5!

soldierKaren.receiveDamage(10)
*/

// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    // remove the received damage from the health property
    this.health -= theDamage;

    /*
if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
if the Viking dies, it should return "NAME has died in act of combat"
*/
    if (this.health > 0) {
      //health is a parameter that can be a number argument so if you need to check if the viking is alive (if health existst), you check whether health is > 0
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    //Adds 1 Viking to the vikingArmy
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    //saxon chosen randomly
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const saxon = this.saxonArmy[saxonIndex];

    //viking chosen randomly
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const viking = this.vikingArmy[vikingIndex];

    //is the same as:
    //const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    //Saxon receiveDamage() is equal to the strength of a Viking
    const vikingAttack = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    //return result of calling receiveDamage() of a Saxon with the strength of a Viking
    return vikingAttack;
  }

  saxonAttack() {
    const saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const viking = this.vikingArmy[vikingIndex];

    const saxonAttack = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return saxonAttack;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    } else if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
