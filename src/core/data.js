export const GOOGLE_MAPS_APIKEY = 'AIzaSyDY7YOE9pLlsmHemgUEfZV8tiysM-k-Ubs';

export const IMAGES = {
    UBER_LOGO: require('../assets/images/Uber_logo.png')
};

export const NavOptionsData = [
    {
        id: '1',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '2',
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    },
];

export const NavFavouritesData = [
    {
        id: '1',
        icon: 'home',
        title: 'Home',
        location: { "lat": 51.5072178, "lng": -0.1275862 },
        destination: 'London, UK'
    },
    {
        id: '2',
        icon: 'briefcase',
        title: 'Work',
        location: { "lat": 51.5032973, "lng": -0.1195537 },
        destination: 'London Eye, London, UK'
    },
];

export const RideOptionsCardData = [
    {
        id: 'Uber-X-1',
        title: 'Uber X',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn'
    },
    {
        id: 'Uber-XL-1',
        title: 'Uber XL',
        multiplier: 1.5,
        image: 'https://links.papareact.com/5w8'
    },
    {
        id: 'Uber-LUX-1',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf'
    },
]