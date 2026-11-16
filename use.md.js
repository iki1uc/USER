// USER/use.md.js — use() für USER, 1 Wahrheit
export const MODULES = {
  LAGE: ["W","S","A","D","Q","R","Y","C","X"],
  RESPO: ["Struktur","Ordnung","Wirkung"],
  ARGUMENT: ["Klarheit","Integrität"],
  WIKI: "Formeln sichtbar (neutral)",
  TMP: "TMP-LAGE: aktiv",
  GHOST: "GHOST-SCAN: bereit",
  FINAL: "reFINAL: +1 System-Reingewinn"
};

export function use() {
  // use(user(lage(respo(argumenteria,myWIKI),formeln),fähigkeiten))
  return [
    "use() aktiv",
    "──────────────────────────────",
    "LAGE: " + MODULES.LAGE.join(" + "),
    "RESPO: " + MODULES.RESPO.join(" + "),
    "Argumenteria: " + MODULES.ARGUMENT.join(" + "),
    "myWIKI: " + MODULES.WIKI,
    MODULES.TMP,
    MODULES.GHOST,
    MODULES.FINAL
  ].join("\n");
}

// für index.html: <pre id="out"> füllen
export function runUse() {
  const el = document.getElementById("out");
  if (el) el.textContent = use();
  return use();
}
