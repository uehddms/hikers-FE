import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

#root {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
}


// 초기 html 설정
html {
	background-color: #ffffff;	
	display: flex;
	justify-content: center;
	align-items: center;
	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 

}

body {
	width: 100%;
	max-width: 390px;
	overflow-x: hidden;
	background-color: #ffffff;
}

`;

export default GlobalStyle;
