import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashBoard from '../Pages/DashBoard';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="DashBoard" component={DashBoard}/>
    </AppStack.Navigator>
);

export default AppRoutes;
