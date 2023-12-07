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
      background-color: #0a0d1c;

    }
    ::-webkit-scrollbar {
        width: 5px;
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 30px;
        background: linear-gradient( #0a0d1c,#3A90A0,#38ecd7e7, transparent);
    }

`;
