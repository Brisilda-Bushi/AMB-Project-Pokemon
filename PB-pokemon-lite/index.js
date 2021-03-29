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
  
  attack (index, attackedPokemon) {
    this.skillsVariety[index].
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
console.log(pikachu);

let bulbasaur = new Pokemon("bulbasaur", 95, 105);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);
bulbasaur.learnAttackSkill(poisonSeed);
console.log(bulbasaur);

pikachu.attack(0, bulbasaur);




