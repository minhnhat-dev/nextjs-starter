import React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head'
import theme from '../src/theme'
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles){
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return( 
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>My page</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
        </Head>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
    
      </CacheProvider>
    </>
  )
}

export default MyApp
