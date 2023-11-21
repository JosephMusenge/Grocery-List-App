import React from 'react';
import { RecipeObj } from '../../types';

// Define the properties that the Recipe component expects to receive
interface Props {
    recipe: RecipeObj | null;   // The recipe object to display, or null if no recipe is selected
}

// Functional component representing a recipe display
export default function Recipe({ recipe }: Props) {
    return (
        // Render a column containing the recipe name and image
        <div className="col">
            {recipe?.name}  {/* Display the name of the recipe, if it exists */}
            <img src={recipe?.image} alt={recipe?.name} />  {/* Display the image of the recipe, if it exists */}
        </div>
    );
}
