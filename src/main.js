import "./app.css";
import App from "./App.svelte";
import "@picocss/pico/css/pico.min.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
