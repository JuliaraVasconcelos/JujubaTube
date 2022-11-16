import React from 'react';
import { ThemeProvider } from 'styled-components';
import {CSSReset} from '../src/components/CSSReset';
import ColorModeProvider, { ColorModeContext } from '../src/components/Menu/components/ColorMode';

// _app.js -> Definições globais do NextJS
// ThemeProvider -> Prove o tema para a app toda
// ColorModeProvider -> Prover o state de light/dark mode para a app toda

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

function ProviderWrapper(props){
    return (
        <ColorModeProvider initialMode={'dark'}>
        {props.children}
        </ColorModeProvider>
    )
}
function MyApp({ Component, pageProps }) {

    const context = React.useContext(ColorModeContext);
    console.log(context.mode);

    return (
        <ThemeProvider theme={theme[context.mode]}>
        <Component {...pageProps} />
        <CSSReset />
        </ThemeProvider>
                )
}
export default function _App(props){
    return (
        <ProviderWrapper>
            <MyApp {...props}/>
        </ProviderWrapper>
    )
}