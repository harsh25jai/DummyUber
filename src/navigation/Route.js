import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import EatsScreen from '../screens/EatsScreen';

const Route = () => {
    const Stack = createNativeStackNavigator();
    // const globalScreenOptions = {
    //     headerStyle: { backgroundColor: '#2C6BED' },
    //     headerTitleStyle: { color: 'white' },
    //     headerTintColor: 'white',
    //     headerTitleAlign: 'center'
    // };

    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS == 'ios' ? -64 : 0}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Home' }} />
                        <Stack.Screen name='MapScreen' component={MapScreen} options={{ title: 'Maps' }} />
                        <Stack.Screen name='EatsScreen' component={EatsScreen} options={{ title: 'Eats' }} />
                    </Stack.Navigator>
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        </NavigationContainer>
    );
};

export default Route;