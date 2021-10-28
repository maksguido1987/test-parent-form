import { createGlobalStyle } from 'styled-components';
import MontsRegularWOFF from '../assets/fonts/Montserrat-Regular.woff';
import MontsRegularWOFF2 from '../assets/fonts/Montserrat-Regular.woff2';
import MontsMediumWOFF from '../assets/fonts/Montserrat-Medium.woff';
import MontsMediumWOFF2 from '../assets/fonts/Montserrat-Medium.woff2';
import MontsBoldWOFF from '../assets/fonts/Montserrat-Bold.woff';
import MontsBoldWOFF2 from '../assets/fonts/Montserrat-Bold.woff2';

const GlobalFonts = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${MontsRegularWOFF}) format('woff'), 
        url(${MontsRegularWOFF2}) format('wof2'); 
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: medium;
    font-weight: 500;
    src: local(''),
        url(${MontsMediumWOFF}) format('woff'), 
        url(${MontsMediumWOFF2}) format('wof2'); 
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: bold;
    font-weight: 700;
    src: local(''),
        url(${MontsBoldWOFF}) format('woff'), 
        url(${MontsBoldWOFF2}) format('wof2'); 
  }

`;
export default GlobalFonts;
