export function Color() {
  const colors = ["gray", "red", "orange", "blue", "yellow"];
  return colors[Math.floor(Math.random() * colors.length)];
}
