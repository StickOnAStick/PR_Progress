import { TouchableOpacity, View } from 'react-native';
import { Box, Flex, useColorModeValue, useTheme } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';



const TabBar = ({state, descriptors, navigation }) => {
    const { colors } = useTheme();

    return (
        
          <Flex direction='row' bg={useColorModeValue(colors.bgLight[1000], colors.bgDark[50])} 
                rounded="xl" alignItems="center"  h="12" bottom="10" left={10} right={10} 
                position="absolute" borderWidth={2} borderColor={useColorModeValue(colors.brdLight[100], colors.brdDark[100])}> 
              
              {state.routes.map((route, index) => {
                  const { options } = descriptors[route.key];
                  // const label =  //OPTIONAL for label
                  // options.tabBarLabel !== undefined
                  //     ? options.tabBarLabel
                  //     : options.title !== undefined
                  //     ? options.title
                  //     : route.name;
          
                  const isFocused = state.index === index;
          
                  const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });
            
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                  };
          
                  const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                  };

                  let tabForDisplay = tabs.find( (object) => object.name === route.name );
                  
                  const IconForDisplay = () => { return isFocused ? tabForDisplay.activeIcon : tabForDisplay.inactiveIcon };
          
                  return (
                  <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityStates={isFocused ? ['selected'] : []}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={options.tabBarTestID}
                      onPress={onPress}
                      onLongPress={onLongPress}
                      style={{ flex: 1, alignItems:"center", borderRadius: 10 }}
                  >
                      <IconForDisplay/>
                      
                  </TouchableOpacity>
                  );
              })}
              </Flex>
            
      );

};

const tabs = [ //Tab Names must be EXACTLY the same as screen name
  {
    name: 'Home',
    activeIcon: <MaterialIcon name="notebook-edit" color="#fff" size={25} style={{ backgroundColor: "#fa1e1e", 
                                                                      height: '75%', aspectRatio: 1, 
                                                                      borderRadius: 100, textAlign: 'center', 
                                                                      textAlignVertical: 'center' }}/>,
    inactiveIcon: <MaterialIcon name="notebook-edit-outline" color="#4d4d4d" size={25} />
  },
  {
    name: 'Grid',
    activeIcon: <MaterialIcon name="view-grid" color="#fff" size={25} style={{ backgroundColor: "#fa1e1e", 
                                                                     height: '75%', aspectRatio: 1, 
                                                                     borderRadius: 100, textAlign: 'center', 
                                                                     textAlignVertical: 'center' }}/>,
    inactiveIcon: <MaterialIcon name="view-grid-outline" color="#4d4d4d" size={25} />
  },
  {
    name: 'Stats',
    activeIcon: <EntypoIcon name="line-graph" color="#fff" size={27} style={{ backgroundColor: "#fa1e1e", 
                                                                    height: '75%', aspectRatio: 1, 
                                                                    borderRadius: 100, textAlign: 'center', 
                                                                    textAlignVertical: 'center' }}/>,
    inactiveIcon: <EntypoIcon name="line-graph" color="#4d4d4d" size={24} />
  },
  {
    name: 'Notification',
    activeIcon: <Icon name="bell" color="#fff" size={25} style={{ backgroundColor: "#fa1e1e", 
                                                                  height: '75%', aspectRatio: 1, 
                                                                  borderRadius: 100, textAlign: 'center', 
                                                                  textAlignVertical: 'center' }}/>,
    inactiveIcon: <Icon name="bell-o" color="#4d4d4d" size={25} />
  },
  {
    name: 'Profile',
    activeIcon: <Icon name="user" color="#fff" size={25} style={{ backgroundColor: "#fa1e1e", 
                                                                  height: '75%', aspectRatio: 1, 
                                                                  borderRadius: 100, textAlign: 'center', 
                                                                  textAlignVertical: 'center' }} />,
    inactiveIcon: <Icon name="user" color="#4d4d4d" size={25} />
  },

];

export default TabBar;


