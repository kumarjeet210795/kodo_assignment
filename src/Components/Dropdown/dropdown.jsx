import React from "react";
import "./dropdown.css"


const Dropdown = (props) => {

    const handleChange = (e) => {
        props.handleDropdown(e)
    }

    return (
        <select id="mySelect" onChange={handleChange}>
            <option value=''>Sort By</option>
            <option value="name">Name</option>
            <option value="dateLastEdited">Date</option>
        </select>

    )
}
export default Dropdown;