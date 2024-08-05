import { router } from "./router";
import "./styles.css";

const $root = document.getElementById('root');

if (!$root) {
  throw new Error('No encontrado');
}

router();