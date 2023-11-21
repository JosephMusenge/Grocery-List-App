import React from 'react';
import { FoodObj } from '../../types';

// Define the properties that the ListItem component expects to receive
interface Props {
    item: FoodObj;                    // The individual food item to display
    updateFunc(ingredient: FoodObj): any | null;  // A function to be called when the item is clicked
}

// Functional component representing a single item in the list
export default function ListItem({ item, updateFunc }: Props) {
    return (
        // Render a clickable card for the food item
        <li className="card" onClick={() => { updateFunc(item) }}>
            { item.name }  {/* Display the name of the food item */}
        </li>
    );
}
