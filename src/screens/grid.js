import React from 'react';
import { Box, useColorMode, useColorModeValue, Flex, Center, Button, useTheme } from 'native-base';
import theme from '../Theme/theme.js';


const Grid = () => {
    
    const {colorMode, toggleColorMode} = useColorMode();
    const { colors } = useTheme();
    

    return (
            
        <Box bg={useColorModeValue(colors.lightPrimary[100], colors.darkPrimary[100])} h="full" safeArea>
            
            <Center>
                <Button alignSelf="center" size="md" onPress={toggleColorMode} variant="solid">
                    Set Theme 
                </Button>
            </Center>
        </Box>     
    
        
    

        
       
    
    );
};

export default Grid;