class Pokemon {
  skillsVariety = [];
  constructor(pokemonName, totalHealth, totalMagic) {
    this.pokemonName = pokemonName;
    this.totalHealth = totalHealth;
    this.totalMagic = totalMagic;
  }

  learnAttackSkill(skill) {
    this.skillsVariety.push(skill)
  }

  attack(index, attackedPokemon) {
    attackedPokemon.totalHealth -= this.skillsVariety[index].attackPower;
    this.totalMagic -= this.skillsVariety[index].magicConsume;
    console.log(`${this.pokemonName} launched skill ${this.skillsVariety[index].skillName} successfully!`)
    console.log(`${attackedPokemon.pokemonName} got ${this.skillsVariety[index].attackPower} damage.`)
  }

  showStatus() {
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
    this.skillName = skillName;
    this.attackPower = attackPower;
    this.magicConsume = magicConsume;
  }
}


let pikachu = new Pokemon("Pikachu", 99, 111);
let lightning = new AttackSkill("Lightning", 15, 7);
let thunderShock = new AttackSkill("Thunder Shock", 45, 40);
let thunderbolt = new AttackSkill("Thunderbolt", 80, 60);
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(thunderShock);
pikachu.learnAttackSkill(thunderbolt);
console.log(pikachu);

let chikorita = new Pokemon("Chikorita", 113, 128);
let vineWhip = new AttackSkill("Vine Whip", 15, 8);
let grassKnot = new AttackSkill("Grass Knot", 30, 25);
let energyBall = new AttackSkill("Energy Ball", 90, 65);
chikorita.learnAttackSkill(vineWhip);
chikorita.learnAttackSkill(grassKnot);
chikorita.learnAttackSkill(energyBall);
console.log(chikorita);

let cyndaquil = new Pokemon("Cyndaquil", 105, 118);
let flame = new AttackSkill("Flame", 15, 9);
let flameBurst = new AttackSkill("Flame Burst", 40, 35);
let flamethrower = new AttackSkill("Flamethrower", 70, 55);
cyndaquil.learnAttackSkill(flame);
cyndaquil.learnAttackSkill(flameBurst);
cyndaquil.learnAttackSkill(flamethrower);
console.log(cyndaquil);

let totodile = new Pokemon("Totodile", 120, 137);
let aqua = new AttackSkill("Aqua", 15, 7);
let aquaJet = new AttackSkill("Aqua Jet", 40, 40);
let aquaPulse = new AttackSkill("Aqua Pulse", 70, 65);
totodile.learnAttackSkill(aqua);
totodile.learnAttackSkill(aquaJet);
totodile.learnAttackSkill(aquaPulse);
console.log(totodile);

let slowpoke = new Pokemon("Slowpoke", 125, 157);
let confusion = new AttackSkill("Confusion", 15, 6);
let frustration = new AttackSkill("Frustration", 45, 40);
let psychic = new AttackSkill("Psychic", 90, 85);
slowpoke.learnAttackSkill(confusion);
slowpoke.learnAttackSkill(frustration);
slowpoke.learnAttackSkill(psychic);
console.log(slowpoke);

let eevee = new Pokemon("Eevee", 117, 126);
let tackle = new AttackSkill("Tackle", 15, 9);
let swift = new AttackSkill("Swift", 50, 48);
let lastResort = new AttackSkill("Last Resort", 90, 78);
eevee.learnAttackSkill(tackle);
eevee.learnAttackSkill(swift);
eevee.learnAttackSkill(lastResort);
console.log(eevee);

let meowth = new Pokemon("Meowth", 106, 120);
let scratch = new AttackSkill("Scratch", 15, 7);
let bite = new AttackSkill("Bite", 35, 28);
let darkPulse = new AttackSkill("Dark Pulse", 80, 68);
eevee.learnAttackSkill(scratch);
eevee.learnAttackSkill(bite);
eevee.learnAttackSkill(darkPulse);
console.log(meowth);

let psyduck = new Pokemon("Psyduck", 120, 127);
let waterGun = new AttackSkill("Water Gun", 15, 8);
let zenHeadbutt = new AttackSkill("Zen Headbutt", 35, 25);
let psybeam = new AttackSkill("Psybeam", 70, 58);
psyduck.learnAttackSkill(waterGun);
psyduck.learnAttackSkill(zenHeadbutt);
psyduck.learnAttackSkill(psybeam);
console.log(psyduck)

let vulpix = new Pokemon("Vulpix", 103, 116);
let ember = new AttackSkill("Ember", 15, 5);
let flameBall = new AttackSkill("Flame Ball", 50, 45);
let flameCharge = new AttackSkill("Flame Charge", 70, 65);
eevee.learnAttackSkill(ember);
eevee.learnAttackSkill(flameBall);
eevee.learnAttackSkill(flameCharge);
console.log(vulpix);

let cubone = new Pokemon("Cubone", 103, 116);
let mudSlap = new AttackSkill("Mud Slap", 15, 7);
let boneClub = new AttackSkill("Bone Club", 40, 33);
let bulldoze = new AttackSkill("Bulldoze", 80, 70);
cubone.learnAttackSkill(mudSlap);
cubone.learnAttackSkill(boneClub);
cubone.learnAttackSkill(bulldoze);
console.log(cubone);

// Add all pokemon to array
const pokemons = [];
pokemons.push(pikachu);
pokemons.push(chikorita);
pokemons.push(cyndaquil);
pokemons.push(totodile);
pokemons.push(slowpoke);
pokemons.push(eevee);
pokemons.push(meowth);
pokemons.push(psyduck);
pokemons.push(vulpix);
pokemons.push(cubone);

// pikachu.showStatus();
// pikachu.getMagic();
// bulbasaur.showStatus();
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