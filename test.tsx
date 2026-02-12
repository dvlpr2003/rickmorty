interface Character {
  name: string;
  hp: number;
  attack: () => void;
  defend: (damage: number) => number;
}

const hero: Character = {
  name: "Iron man",
  hp: 100,
  attack() {
    return this.hp - 10;
  },
  defend(damage: number) {
    return 100 - damage;
  },
};

console.log(hero.defend(80));
