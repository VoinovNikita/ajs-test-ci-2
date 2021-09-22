
const sortXp = (characters) => characters.sort((a, b) => {
  if (a.health < b.health) {
    return 1;
  }
  if (a.health > b.health) {
    return -1;
  }
  return 0;
});

export default sortXp;
