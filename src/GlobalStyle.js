import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`
  :root{color-scheme:dark;--green:#62ef8d;--green-soft:#b4f5c5;--surface:#0b1d12;--edge:#275839}
  *,*::before,*::after{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;min-width:320px;background:radial-gradient(ellipse at 80% 10%,rgba(25,100,46,.16),transparent 38%),radial-gradient(ellipse at 10% 60%,rgba(24,75,30,.10),transparent 42%),#060f09;color:#eaf8ed;font-family:"DM Sans",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  h1,h2,h3,h4,.brand-name{font-family:"Oxanium","Space Grotesk",sans-serif}
  .eyebrow,.category,.form-eyebrow{font-family:"Oxanium","Space Grotesk",sans-serif}
  @keyframes matrix-reveal {
    from { opacity: 0; transform: translate3d(0, 46px, 0); filter: blur(5px); }
    to { opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0); }
  }
  .motion-enabled .reveal:not(.is-visible) { opacity: 0; }
  .motion-enabled .reveal.is-visible {
    animation: matrix-reveal .9s cubic-bezier(.22,1,.36,1) both;
  }
  .motion-enabled .reveal.is-visible[data-delay="1"] { animation-delay: .12s; }
  .motion-enabled .reveal.is-visible[data-delay="2"] { animation-delay: .22s; }
  @media (prefers-reduced-motion: reduce) {
    .motion-enabled .reveal { opacity: 1 !important; animation: none !important; transform: none !important; filter: none !important; }
  }
  button,input,textarea{font:inherit}
  a{text-underline-offset:3px}
  ::selection{background:#2b9950;color:#fff}
  :focus-visible{outline:2px solid #66f09a;outline-offset:3px}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;
