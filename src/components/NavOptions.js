import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AdvanceImage } from 'react-native-advance-image';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { NavOptionsData } from '../core/data';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/slices/navSlice';

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            horizontal
            keyExtractor={item => item.id}
            data={NavOptionsData}
            renderItem={({ item }) => (
                <TouchableOpacity
                    disabled={!origin}
                    style={[tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`]}
                    onPress={() => navigation.navigate(item.screen)}>
                    <View style={tw`${!origin && 'opacity-20'}`}>
                        <AdvanceImage
                            source={{ uri: item.image }}
                            style={{ width: 120, height: 120 }}
                            resizeMethod='auto'
                            resizeMode='contain' />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon type='antdesign' name='arrowright' color='white' style={[tw`p-2 bg-black rounded-full w-10 mt-4`]} />
                    </View>
                </TouchableOpacity>
            )} />
    );
}

const styles = StyleSheet.create({

});

export default NavOptions;