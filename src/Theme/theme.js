import { extendTheme } from "native-base";

const theme = extendTheme({
    colors: {
        red: {
            50: "#fee6e6",
            100: "#fdb4b4",
            200: "#fc8282",
            300: "#fb5050",
            400: "#fa1e1e",
            500: "#e10505",
            600: "#af0404",
            700: "#7d0303",
            800: "#4b0202",
            900: "#190101"

        },
        
        bgDark:{
            50: "#1B1B1B",
            100: "#222",
        },
        bgLight: {
            50: "#f4f4f4",
            100: "#fff",
        },
        brdLight: {
            100: "#EAEAEA"
        },
        brdDark: {
            100: "#4A4A4A"
        }
    },
    config: {
        initialColorMode: 'dark'
    }
});

export default theme;