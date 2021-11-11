import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

*,::before, ::after{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
background-color:${({theme})=>theme.colors.primary};
color:${({theme})=>theme.colors.text};
}

#__next, html, body{
height:100%;
}

`

export default GlobalStyle
