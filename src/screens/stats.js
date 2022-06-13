import { Box, Input, Text, useColorModeValue, useTheme } from "native-base";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import React, { useState } from 'react';



const Stats = () => {

    const { colors } = useTheme();
    const [text, setText ] = useState('Default');

    const handleChange = text => {
        if(!text){setText('Default');}
        else{setText(text);}
        
    };
        
   

    return(
        <Box bg={useColorModeValue(colors.lightPrimary[100], colors.darkPrimary[100])} h="full" safeArea>
            <Text _dark={{colors: '#000' }} pt="3" fontWeight="black" fontSize="2xl">This is the stats menu</Text>
            <LineChart
                data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />

            <Input w="100%" size={5} color="muted.400" 
                   onChangeText={handleChange} placeholder="Weight"/>
            <Text style={{color: 'white', height: 400}}>{text}</Text>
        </Box>
    );
};

export default Stats;