import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_APIKEY } from '../core/data';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../redux/slices/navSlice';

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            animated: true,
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        });
    }, [origin, destination]);

    useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
            fetch(URL)
                .then(res => res.json())
                .then(res => dispatch(setTravelTimeInformation(res.rows[0].elements[0])))
                .catch(error => console.error('error', error))
        };

        getTravelTime();

    }, [origin, destination]);

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            onMapReady={() => {
                if (origin && destination) {
                    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
                        animated: true,
                        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
                    });
                }
            }}
            initialRegion={{
                latitude: origin?.location?.lat,
                longitude: origin?.location?.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}>

            {origin && destination &&
                <MapViewDirections
                    origin={origin?.description}
                    destination={destination?.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor='black' />
            }

            {origin?.location &&
                <Marker
                    title='Origin'
                    description={origin?.description}
                    identifier='origin'
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }} />}
            {destination?.location &&
                <Marker
                    title='Destination'
                    description={destination?.description}
                    identifier='destination'
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng
                    }} />}
        </MapView>
    );
}

const styles = StyleSheet.create({

});

export default Map;