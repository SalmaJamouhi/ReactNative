import React from 'react';

import { Provider } from 'react-redux';
import Store from './Store/configureStore'
import NavigationBottom from './Navigation/NavigationBottom';

export default function App() {
    return (
       <Provider store={Store}>
         <NavigationBottom/>
       </Provider>
  
      )
}

