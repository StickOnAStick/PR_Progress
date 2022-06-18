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
        midnight: {
            50: "#efeafb",
            100: "#cfbff2",
            200: "#ae95e9",
            300: "#8e6be1",
            400: "#6e40d8",
            500: "#5427bf",
            600: "#411e94",
            700: "#2f166a",
            800: "#1c0d40",
            900: "#090415"
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