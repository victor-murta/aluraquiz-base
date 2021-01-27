import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import Head from 'next/head';

/*npm run dev */

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box; 
  }

  body{
    margin: 0;
    padding: 0;

    /*new styles*/
    display: flex;
    flex-direction: column; 
    font-family: 'Lato', sans-serif;

    //deixa branco no começo
    color: ${({theme}) => theme.colors.contrastText};

    html,body{
      min-height: 100vh;
    }

    #__next{
      display: flex;
      flex: 1;
      flex-direction: column;
    }

  }
`


const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>

      <ThemeProvider theme={theme}>
      <GlobalStyle />
        {/*home */}
        {/* sobre*/}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
