import react from "react";
import { Box, useTheme } from 'native-base';


const HeaderBar = () => {

    const {colors} = useTheme();

    return(
        <Box top={0} h="24" bg={useColorModeValue(colors.bgLight[100], colors.bgDark[100])}>This is the header bar</Box>
    );
};