import react from "react";
import { Box, useTheme, useColorModeValue } from 'native-base';


const HeaderBar = () => {

    const {colors} = useTheme();

    return(
        <Box top={0} h="10" w="full" bg={useColorModeValue(colors.bgLight[100], colors.bgDark[100])}>This is the header bar</Box>
    );
};

export default HeaderBar;