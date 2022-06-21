import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination } from '../redux/slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from '../core/data';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[tw`flex-1 bg-white`]}>
            <Text style={[tw`text-center py-5 text-xl`]}>Good Morning</Text>
            <View style={[tw`border-t border-gray-200 flex-shrink`]}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        nearbyPlacesAPI={'GooglePlacesSearch'}
                        debounce={400}
                        fetchDetails
                        minLength={2}
                        enablePoweredByContainer={false}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            // console.log(data, details);

                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }));

                            navigation.navigate('RideOptionsCard');
                        }}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                        styles={{
                            container: {
                                backgroundColor: 'white',
                                paddingTop: 20,
                                flex: 0
                            },
                            textInput: {
                                backgroundColor: '#DDDDDF',
                                borderRadius: 0,
                                fontSize: 18,
                                color: '#000000'
                            },
                            textInputContainer: {
                                paddingHorizontal: 20,
                                paddingBottom: 0
                            }
                        }} />
                </View>
                <NavFavourites from={'NAVIGATESCREEN'} />
            </View>

            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}>
                <TouchableOpacity onPress={() => navigation.navigate('RideOptionsCard')} style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name='car' type='font-awesome' color='white' size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default NavigateCard;