import { useColorModeValue, useTheme } from "native-base";



const navigatorTheme = () => {
    const { colors } = useTheme();

    const darkNavTheme = { //Native Navigator color theme object
        dark: true,
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: colors.darkPrimary[100], //Using colors from Nativebase to unify pallete 
            card: 'rgb(255, 255, 255)',
            text: 'rgb(28, 28, 30)',
            border: 'rgb(199, 199, 204)',
            notification: 'rgb(255, 69, 58)',
        },
    };

    const lightNavTheme = { //Native Navigator color theme object
        dark: false,
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: colors.lightPrimary[100],
            card: 'rgb(255, 255, 255)',
            text: 'rgb(28, 28, 30)',
            border: 'rgb(199, 199, 204)',
            notification: 'rgb(255, 69, 58)',
        },

    };

    return (useColorModeValue(lightNavTheme, darkNavTheme));
};

export default navigatorTheme;