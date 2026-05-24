const fs = require("fs");

const files = fs
  .readdirSync("./foreign-music")
  .filter((f) => f.endsWith(".mp3"));
fs.writeFileSync("./foreign-music/index.json", JSON.stringify(files, null, 2));

console.log(`Готово! ${files.length} песен в папке foreign-music`);
