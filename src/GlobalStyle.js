import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root { color-scheme: dark; }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    min-width: 320px;
    background: radial-gradient(ellipse at 80% 10%, rgba(10, 71, 84, .22), transparent 38%),
                radial-gradient(ellipse at 10% 60%, rgba(18, 66, 127, .13), transparent 42%), #06101e;
    color: #edf9ff;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  button, input, textarea { font: inherit; }
  a { text-underline-offset: 3px; }
  ::selection { background: #2b9b80; color: #fff; }
  :focus-visible { outline: 2px solid #66f0c2; outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
  }
`;
