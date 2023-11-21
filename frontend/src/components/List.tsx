import ListItem from './ListItem';
import React from 'react';
import { FoodList, FoodObj } from '../../types';

// Define the properties that the List component expects to receive
interface Props {
    list: FoodList | null;   // The list of food items to display
    updateFunc: any | null;  // A function to be passed down to ListItem for handling item clicks
}

// Functional component representing a list of items
export default function List({ list, updateFunc }: Props) {
    return (
        // Render a column containing an unordered list
        <div className="col">
            <ul>
                {
                    // Map through each item in the list and render a ListItem component for each
                    list?.list?.map((food: FoodObj, idx: any) => <ListItem item={food} updateFunc={updateFunc} />)
                }
            </ul>
        </div>
    );
}
