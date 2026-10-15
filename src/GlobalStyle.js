import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Oxanium:wght@400;500;600;700;800&display=swap');
  :root{color-scheme:dark;--green:#62ef8d;--green-soft:#b4f5c5;--surface:#0b1d12;--edge:#275839}
  *,*::before,*::after{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;min-width:320px;background:radial-gradient(ellipse at 80% 10%,rgba(25,100,46,.16),transparent 38%),radial-gradient(ellipse at 10% 60%,rgba(24,75,30,.10),transparent 42%),#060f09;color:#eaf8ed;font-family:"DM Sans",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  h1,h2,h3,h4,.brand-name{font-family:"Oxanium","Space Grotesk",sans-serif}
  .eyebrow,.category,.form-eyebrow{font-family:"Oxanium","Space Grotesk",sans-serif}
  .motion-enabled .reveal{opacity:0;transform:translate3d(0,42px,0);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}
  .motion-enabled .reveal.is-visible{opacity:1;transform:translate3d(0,0,0)}
  .motion-enabled .reveal[data-delay="1"]{transition-delay:.1s}
  .motion-enabled .reveal[data-delay="2"]{transition-delay:.2s}
  @media(prefers-reduced-motion:reduce){.motion-enabled .reveal{opacity:1!important;transform:none!important;transition:none!important}}
  button,input,textarea{font:inherit}
  a{text-underline-offset:3px}
  ::selection{background:#2b9950;color:#fff}
  :focus-visible{outline:2px solid #66f09a;outline-offset:3px}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;
