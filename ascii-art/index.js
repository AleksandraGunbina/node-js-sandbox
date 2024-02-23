const art = require("ascii-art");

art.font("test art", "Doom", (err, text) => {
  if (err) return;
  console.log(text);
});
