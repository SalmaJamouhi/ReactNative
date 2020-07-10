import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import {NavigationContainer} from '@react-navigation/native'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const Stack = createStackNavigator();


class Navigation extends React.Component{
        render(){
          return(
         
            <Stack.Navigator>
              
             
              <Stack.Screen name="Favorites" component={Favorites} />
             
               
              </Stack.Navigator>
          
          )  ;
        }
    }

export default Navigation