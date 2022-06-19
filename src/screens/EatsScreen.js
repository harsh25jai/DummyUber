import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const EatsScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={tw`bg-white h-full items-center justify-center`}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={[tw`bg-gray-100 absolute top-10 left-8 p-3 z-10 rounded-full shadow-lg`]}>
                <Icon name='home' />
            </TouchableOpacity>

            <Text style={tw`text-lg font-semibold`}>Order Food</Text>
            <Text style={tw`text-gray-500`}>Will be adding soon!</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default EatsScreen;