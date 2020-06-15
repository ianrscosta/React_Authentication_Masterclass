import 'react-native-gesture-handler';

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from './contexts/auth'

import Routes from './Routes/index';

const App: React.FC = () => {

    return (
        <NavigationContainer>
            <AuthContext.Provider value={{signed: true}}>
                <Routes/>
            </AuthContext.Provider>
        </NavigationContainer>
    )
}

export default App