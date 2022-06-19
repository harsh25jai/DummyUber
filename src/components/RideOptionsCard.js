import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from 'react-native-elements';
import { AdvanceImage } from 'react-native-advance-image';
import tw from 'tailwind-react-native-classnames';
import { RideOptionsCardData } from '../core/data';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../redux/slices/navSlice';
import 'intl';
import "intl/locale-data/jsonp/en";

const RideOptionsCard = ({ navigation }) => {
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const SURGE_CHARGE_RATE = 1.5;

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw`absolute top-3 left-3 rounded-full z-10 `}>
                    <Icon name='chevron-left' type='fontawesome' />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride {'- ' + travelTimeInformation?.distance.text}</Text>
            </View>
            <FlatList
                data={RideOptionsCardData}
                keyExtractor={item => item.id}
                renderItem={({ item: { id, image, multiplier, title }, item }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-10 ${id == selected?.id && 'bg-gray-200'}`}>
                        <AdvanceImage
                            source={{ uri: image }}
                            style={{ width: 100, height: 100 }}
                            resizeMethod='auto'
                            resizeMode='contain' />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration.text}</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-gb', {
                                style: 'currency',
                                currency: 'GBP',
                            }).format((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100)}
                            
                            {/* {new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR",
                            }).format(
                                (travelTimeInformation?.duration.value *
                                    SURGE_CHARGE_RATE *
                                    multiplier) /
                                100
                            )} */}
                        </Text>
                    </TouchableOpacity>
                )} />
            <View style={tw`mt-auto`}>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-3  ${!selected && 'bg-gray-300'}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default RideOptionsCard;