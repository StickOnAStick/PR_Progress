
import { useColorModeValue, useTheme, Box } from 'native-base';

const Home = () => {
    const {colors} = useTheme();

    return(
        <Box h="full" bg={useColorModeValue(colors.bgLight[100], colors.bgDark[100])}>This is the header bar</Box>
    );
};

export default Home;