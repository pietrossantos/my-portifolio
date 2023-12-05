import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
     @font-face{
      font-family: 'Mokoto'; 
      src: url('../src/assets/fonts/Mokoto Glitch Mark 2.ttf') format('truetype'), 
      url('../src/assets/fontsMokoto Glitch Mark 2.otf') format('opentype');
      font-weight: normal;
      font-style: normal;
      }
      
      *{  
      font-family: 'Mokoto', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

`;
