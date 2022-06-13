import { extendTheme } from "native-base";

const theme = extendTheme({
    colors: {
        darkPrimary:{
            100: "#333",
        },
        lightPrimary: {
            100: "#fff",
        }
    },
    config: {
        initialColorMode: 'dark'
    }
});

export default theme;