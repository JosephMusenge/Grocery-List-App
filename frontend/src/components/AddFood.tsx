import React, { useState } from "react";
import { MouseEventHandler } from "react";
import '../index.css';

// Define the properties that the AddModal component expects to receive
type Props = {
    onClose: MouseEventHandler;             // Function to close the modal
    onAdd: (foodName: string) => void;      // Function to add a new food item
}

// Functional component representing an Add Item modal
function AddModal(props: Props) {
    // State variable to track the entered food name
    const [foodName, setFoodName] = useState('');

    // Function to update the food name as it is typed in the input field
    function changeFoodName(event: React.ChangeEvent<HTMLInputElement>) {
        setFoodName(event.target.value);
    }

    // Render the Add Item modal
    return (
        <div>
            {/* Input field for entering the food name */}
            <input aria-label="foodName" onChange={changeFoodName} type="text" />

            {/* Close button to close the modal */}
            <button className='btn' onClick={props.onClose}>Close</button>

            {/* Add button to add the entered food name */}
            <button className='btn' onClick={() => {props.onAdd(foodName);} }>Add</button>
        </div>
    );
}

export default AddModal;
