export function Color() {
  const colors = ["gray", "red", "orange", "green", "teal", "blue", "cyan"];
  return colors[Math.floor(Math.random() * colors.length)];
}
