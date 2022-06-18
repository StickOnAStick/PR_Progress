import React from 'react';
import { Box, useColorMode, useColorModeValue, VStack, HStack, Divider, Text, Center, useTheme, ScrollView } from 'native-base';
import theme from '../Theme/theme.js';
import ColorModeToggle from '../components/reusable/colorModeToggle.js';


const Grid = () => {
    
    const {colorMode, toggleColorMode} = useColorMode();
    const { colors } = useTheme();
    

    return (
            
        <ScrollView bg={useColorModeValue(colors.bgLight[100], colors.bgDark[100])} _contentContainerStyle={{ p: "5", my: "4"}} h="full" safeArea>
            <HStack space={3} justifyContent="center" marginY={1.5}>
                <Center h="40" w="1/2" bg="red.300" rounded="md" shadow={3}>Settings</Center>
                <Center h="40" w="1/2" bg="red.400" rounded="md" shadow={3}><ColorModeToggle/></Center>
            </HStack>
            <HStack space={3} justifyContent="center" marginY={1.5}>
                <Center h="40" w="1/2" bg="red.300" rounded="md" shadow={3} />
                <Center h="40" w="1/2" bg="red.400" rounded="md" shadow={3} />
            </HStack>
            <HStack space={3} justifyContent="center" marginY={1.5}>
                <Center h="40" w="1/2" bg="red.300" rounded="md" shadow={3} />
                <Center h="40" w="1/2" bg="red.400" rounded="md" shadow={3} />
            </HStack>
            <HStack space={3} justifyContent="center" marginY={1.5}>
                <Center h="40" w="1/2" bg="red.300" rounded="md" shadow={3} />
                <Center h="40" w="1/2" bg="red.400" rounded="md" shadow={3} />
            </HStack>
            <HStack space={3} justifyContent="center" marginY={1.5}>
                <Center h="40" w="1/2" bg="red.300" rounded="md" shadow={3} />
                <Center h="40" w="1/2" bg="red.400" rounded="md" shadow={3} />
            </HStack>
            <HStack space={3} justifyContent="center" marginY={1.5}>
                <Center h="40" w="1/2" bg="red.300" rounded="md" shadow={3} />
                <Center h="40" w="1/2" bg="red.400" rounded="md" shadow={3} />
            </HStack>
            <HStack space={3} justifyContent="center" marginY={1.5}>
                <Center h="40" w="1/2" bg="red.300" rounded="md" shadow={3} />
                <Center h="40" w="1/2" bg="red.400" rounded="md" shadow={3} />
            </HStack>
        </ScrollView>     
    
        
    

        
       
    
    );
};

export default Grid;