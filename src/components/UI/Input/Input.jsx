import React from 'react';
import cs from "../../SearchBar/SearchBar.module.scss";

const Input = ({ className, onChange, value,name }) => {
    return (
        <input value={value} name={name}   onChange={onChange} className={className} type="text" />
    );
};

export default Input;