// USER/index.js — war: "../router.js", muss: "./router.js"
import { ORT } from "./router.js";

(async () => {
  const user = await ORT.loadUser();
  document.getElementById("user-name").innerText = user?.name ?? "Gast";
  document.getElementById("user-level").innerText = user?.level ?? "-";
  document.getElementById("user-status").innerText = user?.status ?? "unknown";
})();
import { runUse } from "./use.md.js";
document.getElementById("btn-run")?.addEventListener("click", runUse);
