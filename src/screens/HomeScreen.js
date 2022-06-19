import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AdvanceImage } from 'react-native-advance-image';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import NavFavourites from '../components/NavFavourites';
import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_APIKEY, IMAGES } from '../core/data';
import { setDestination, setOrigin } from '../redux/slices/navSlice';


const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <AdvanceImage
                    source={IMAGES.UBER_LOGO}
                    style={{ width: 100, height: 100 }}
                    resizeMethod='auto'
                    resizeMode='contain' />

                <GooglePlacesAutocomplete
                    placeholder='Where From'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    fetchDetails
                    minLength={2}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        // console.log(data, details);
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null));
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 16
                        }
                    }}
                />

                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default HomeScreen;