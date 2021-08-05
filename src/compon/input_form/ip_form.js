import './ip_form.css'
import React, {useState} from "react";
import PropTypes from "prop-types";

export default function InputForm (props) {
    // Declare a new state variable, which we'll call name
    const[ipState, setIPState] = useState(props);

    const className = [
        "component-button",
        ipState.ipType
      ];

      console.log("labelName: ", ipState.labelName)

    return(
        <div className={className.join("").split(" ")}>
            <label for={ipState.labelName}>{ipState.labelName}</label><br />
            <input type={ipState.type} name={ipState.type} />
        </div>
    );
}