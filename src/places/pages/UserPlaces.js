import React from "react";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import PlaceList from "../components/PlaceList";

// import './UserPlaces.css';

const UserPlaces = () => {
    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Empire State Building',
            description: 'Most famous sky scraper',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w408-h272-k-no',
            address: '20 W 34th St., New York, NY 10001, United States',
            location: {
                lat: 40.7484445,
                lng: -73.9882393
            },
            creator: 'u1',
        },
        {
            id: 'p2',
            title: 'Empire State Building',
            description: 'Most famous sky scraper',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w408-h272-k-no',
            address: '20 W 34th St., New York, NY 10001, United States',
            location: {
                lat: 40.7484445,
                lng: -73.9882393
            },
            creator: 'u1',
        },
        {
            id: 'p3',
            title: 'Empire State Building',
            description: 'Most famous sky scraper',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w408-h272-k-no',
            address: '20 W 34th St., New York, NY 10001, United States',
            location: {
                lat: 40.7484445,
                lng: -73.9882393
            },
            creator: 'u3',
        }
    ];

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
    return (
        <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces;