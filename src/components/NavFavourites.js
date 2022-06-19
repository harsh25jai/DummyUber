import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { NavFavouritesData } from '../core/data';
import { setDestination, setOrigin } from '../redux/slices/navSlice';

const NavFavourites = ({ from }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <FlatList
            data={NavFavouritesData}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`, { height: 0.5 }]} />}
            renderItem={({ item: { icon, location, id, destination, title }, item }) => (
                <TouchableOpacity
                    style={[tw`flex-row items-center p-5`]}
                    onPress={() => {
                        if (from == 'HOMESCREEN') {
                            dispatch(setOrigin({
                                location: location,
                                description: destination
                            }))

                            dispatch(setDestination(null));
                        } else {
                            dispatch(setDestination({
                                location: location,
                                description: destination
                            }));

                            navigation.navigate('RideOptionsCard');
                        }
                    }}>
                    <Icon style={[tw`mr-4 rounded-full bg-gray-300 p-3`]} name={icon} type='ionicon' color='white' size={18} />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{title}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )} />
    );
}

const styles = StyleSheet.create({

});

export default NavFavourites;