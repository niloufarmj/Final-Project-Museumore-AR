/**
 * Button Component
 * @description A common button used in the project.
 * 
 * @param {Object} params The parameters for the button
 * @param {string} params.text Text shown on the button
 * @param {function} params.onClick Callback to be invoked when the button is clicked
 * @param {string} params.redirectPath Path to redirect to when the button is clicked
 * @param {string} params.path Path to navigate to when the button is clicked
 * @param {function} params.stateChanger Callback to be invoked when the button is clicked and it is a login or signup button
 *
 * @author Niloufar Moradi Jam - Kimia Sedighi
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/CSS/button.css";

function Button(params) {
  const navigate = useNavigate();
  const stateChanger = params.stateChanger;
  
   /**
   * Handles the click event for the button
   */
  const handleClick = () => {
    if (params.redirectPath) {
      window.location.replace(params.redirectPath);
    } else {
      navigate(params.path);
      // if this button is login or signup it hanldles navigating by itself and its params doesn't have path and it has statechanger
      if (stateChanger) {
        stateChanger();
      }
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {params.text}
    </button>
  );
}

export default Button;
