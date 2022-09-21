//here we impoer react
import React from "react";



//here we created the function which will allow the user to choose the department
function SearchTool() {
    return ( 
        <label>Choose Department:
                    <select id="department-choice">
                        <option value="advertising">Advertising</option>
                        <option value="finance">Finance</option>
                        <option value="hr">HR</option>
                        <option value="legal">Legal</option>
                    </select>
                    </label>
    )

}

export default SearchTool;