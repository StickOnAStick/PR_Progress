import { Box, Button, Input, Text, useColorModeValue, useTheme } from "native-base";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, View } from "react-native";
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

const Stats = () => {
    //Storage
    
    const storeData = async (value) => {
        try {
            
            await AsyncStorage.setItem('@value_key', value)
        } catch (e) {
            console.log("Error in storing data")
        }
    }

    const getData = async () => {
        try{
            const value = await AsyncStorage.getItem('@value_key')
            if(value !== null) {
                return setText(value)
            }
        } catch (e){
            console.log("Error reading value")
        }
    }

    
    //States
    const { colors } = useTheme();
    const [text, setText ] = useState('Default');
    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
        setShow(false);
        console.log(date.toLocaleDateString());
        console.log(date.getDate());
        console.log(dayNames[date.getDay()]);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    
    const handleChange = text => {
        if(!text){setText('Default');}
        else{setText(text);}
        
    };

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   
    const getLabels = () => {
        date.getDay()
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
            <Text style={{color: 'black', height: 50}}>{text}</Text>

            <Input size={5} color="muted.200" onChangeText={storeData} placeholder="store Data"/>
            <Button onPress={getData} >Get Data</Button>
            <Text style={{color: 'black', height: 40}}>{text}</Text>
            <View>
                <Button onPress={showDatepicker} placeholder="ShowDatePicker">ShowDatePicker</Button>
                <Button  onPress={showTimepicker} placeholder="showTimePicker">ShowTimePicker</Button>

                {show && (
                    <DateTimePicker 
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
                
            </View>

        </Box>
    );
};

export default Stats;