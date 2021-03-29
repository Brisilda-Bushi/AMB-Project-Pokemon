// function outer(){
//   let number = 0;
//   return function(){
//       number ++;
//       console.log("from inside inner", number)
//   }
// }


class Pokemon {
    skillsVariety = [];
  constructor(pokemonName, totalHealth, totalMagic) {
    this.pokemonName=pokemonName;
    this.totalHealth=totalHealth;
    this.totalMagic=totalMagic;
}

    learnAttackSkill (skill) {
    this.skillsVariety.push(skill)
    }
  
    attack(index, attackedPokemon) {
      attackedPokemon.totalHealth-=this.skillsVariety[index].attackPower;
      this.totalMagic-=this.skillsVariety[index].magicConsume;
      console.log(`${this.pokemonName} launched skill ${this.skillsVariety[index].skillName} successfully`)
      console.log(`${attackedPokemon.pokemonName} got ${this.skillsVariety[index].attackPower} damage`)
    }

    showStatus () {
      console.log(`${this.pokemonName} status: 
     \t - health: ${this.totalHealth}
     \t - magic: ${this.totalMagic}`);
    }

    getMagic() {
      this.totalMagic += Math.floor(Math.random() * 50) + 10;
    }


}



class AttackSkill {
    constructor(skillName, attackPower, magicConsume) {
    this.skillName=skillName;
    this.attackPower=attackPower;
    this.magicConsume=magicConsume;
    }
  }
    

let pikachu = new Pokemon ("Pikachu", 100, 60);
let lightning = new AttackSkill("lightning", 40, 30); 
pikachu.learnAttackSkill(lightning);
// console.log(pikachu);

let bulbasaur = new Pokemon("Bulbasaur", 95, 105);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);
bulbasaur.learnAttackSkill(poisonSeed);
// console.log(bulbasaur);

pikachu.showStatus();
pikachu.getMagic();
// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);
// pikachu.showStatus();
// bulbasaur.showStatus();
// pikachu.showStatus();
// bulbasaur.showStatus();
// pikachu.attack(0, bulbasaur);
// pikachu.attack(0, bulbasaur);
// pikachu.getMagic();
// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);




