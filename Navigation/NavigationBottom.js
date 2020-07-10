import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Favorites from '../Components/Favorites'
import Navigation from './Navigation'
import Navigation2 from './Navigation2'

import {MaterialIcons} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

class NavigationBottom extends React.Component{

  render(){

    return(
        <NavigationContainer>
       
        <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Search') {

            iconName = focused

            ? 'search'

            : 'search';

          } else if (route.name === 'Favorites') {

            iconName = 'favorite';

          }

    

          return <MaterialIcons name={iconName} size={size} color={color}     />;

            },

          })}

          tabBarOptions={{

          activeTintColor: 'pink',

          inactiveTintColor: 'pink',

          }}

        >
          <Tab.Screen name="Search" component={Navigation} />
          <Tab.Screen name="Favorites" component={Navigation2} />
        </Tab.Navigator>
      </NavigationContainer>

    );

  }

}



export default NavigationBottom