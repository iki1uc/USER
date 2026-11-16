// in index.js steht:
import { ORT } from "../router.js";  // ❌ 1 Ordner zu hoch

// richtig wäre, weil index.js + router.js im GLEICHEN Ordner sind:
import { ORT } from "./router.js";   // ✅
