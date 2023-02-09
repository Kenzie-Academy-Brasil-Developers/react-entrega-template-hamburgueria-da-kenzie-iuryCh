import { createGlobalStyle } from "styled-components";
import { ResetGlobal } from "./Reset.js";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    
    ${() => ResetGlobal};
    
    :root{
        /* Primary Palette */
        --Color-primary: #27AE60;
        --Color-primary-50: #93D7AF;
        --Color-secondary: #EB5757;
        --color-dark: #333333;

        /* Grey Scale Palette */
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        /* Typography */
        --Heading-26: 700 1.625rem "Inter", sans-serif;
        --Heading-22: 700 1.375rem "Inter", sans-serif;
        --Heading-18: 700 1.125rem "Inter", sans-serif;
        --Heading-14: 700 0.875rem "Inter", sans-serif;
        --Headline-16: 400 1rem "Inter", sans-serif;
        --Body-14: 400 0.875rem "Inter", sans-serif;
        --Body-600: 600 0.875rem "Inter", sans-serif;
        --Caption-12: 400 0.75rem "Inter", sans-serif;

        /* button */
        --standard-radius: 8px;
    }
   


`;
