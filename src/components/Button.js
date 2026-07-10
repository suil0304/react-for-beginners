/**
 * @import React from "react"
 */

import PropTypes from "prop-types";

import style from "../css/Button.module.css";

/**
 * @typedef {{
 *      text:string
 * }} ButtonProps
 */
/**
 * 
 * @param {ButtonProps} props 
 * @returns {React.JSX.Element}
 */
function Button({ text = "hello" }) {
    return (
        <button className={style["btn-component"]}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;