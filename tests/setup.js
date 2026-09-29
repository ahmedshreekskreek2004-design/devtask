import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const html = fs.readFileSync(
  path.resolve(__dirname, "../index.html"),
  "utf8"
);

document.documentElement.innerHTML = html;