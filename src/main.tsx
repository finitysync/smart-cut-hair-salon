
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);

  const hidePreloader = () => {
    const el = document.getElementById('preloader');
    if (!el) return;
    el.classList.add('hidden');
    setTimeout(() => {
      el.remove();
    }, 350);
  };

  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 300);
  } else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 300));
  }
  