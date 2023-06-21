import React from "react";

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = (props) => {
    if (props.items.length === 0) {
        return <div className="place-list center">
                <Card>
                    <h2>No places found! Maybe create one?</h2>
                    <button>Share place</button>
                </Card>
            </div>
    }
    return (
        <ul className="place-list">
            {props.items.map((place) => {
                return <PlaceItem 
                    id={place.id} 
                    key={place.id} 
                    image={place.imageUrl} 
                    title={place.title} 
                    description={place.description} 
                    address={place.address} 
                    creatorId={place.creator} 
                    coordinates={place.location} />
            })}
        </ul>
    )
}

export default PlaceList;