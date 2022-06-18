import { Box, Button, useColorMode, useColorModeValue, useTheme } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

const ColorModeToggle = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    const colors = useTheme();

    return(
        <Button bg={useColorModeValue(colors.midnight[50], colors.midnight[800])} colorScheme="error" alignSelf="center" 
                size="lg" onPress={toggleColorMode} variant="solid">
            {
                useColorModeValue(
                    <Icon name="lightbulb-o"/>,
                    <Icon name="moon-o"/>
                )
            }
            
        </Button>
    );
};

export default ColorModeToggle;