import level0 from "./levels/level0";
import level1 from "./levels/level1";
import level2 from "./levels/level2";
import level3 from "./levels/level3";

function addButton(text: string, onClick: () => void): void {
  const div = document.createElement("div");
  const button = document.createElement("button");
  button.textContent = text;
  button.onclick = onClick;
  div.appendChild(button);
  document.documentElement.appendChild(div);
}

addButton("Level 0", level0);
addButton("Level 1", level1);
addButton("Level 2", level2);
addButton("Level 3", level3);
