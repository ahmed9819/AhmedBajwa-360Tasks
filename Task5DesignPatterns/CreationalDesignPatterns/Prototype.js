
class Character {
  clone() {
    throw new Error("clone() method must be implemented");
  }
}


class GameCharacter extends Character {
  constructor(name, level, weapon, skills) {
    super();
    this.name = name;
    this.level = level;
    this.weapon = weapon;
    this.skills = skills;
  }


  clone() {
    return new GameCharacter(
      this.name,
      this.level,
      this.weapon,
      [...this.skills] 
    );
  }
}


const originalCharacter = new GameCharacter(
  "Warrior",
  10,
  "Sword",
  ["Attack", "Defense"]
);

console.log("Original:", originalCharacter);


const clonedCharacter = originalCharacter.clone();

clonedCharacter.name = "Warrior Clone";
clonedCharacter.skills.push("Power Strike");

console.log("Cloned:", clonedCharacter);
console.log("Original after clone change:", originalCharacter);
