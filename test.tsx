interface Character {
  Username: string;
  friends: string[];
  addfriend: (name: string) => void;
}

const SocialMedia: Character = {
  Username: "dvlpr",
  friends: ["sydney", "olivia rodrigo"],
  addfriend(name) {
    this.friends.push(name);
    return this.friends;
  },
};

console.log(SocialMedia.addfriend("kendall"));
