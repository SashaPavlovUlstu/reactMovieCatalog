import React from 'react';
import cs from "./Logo.module.scss"
const Logo = () => {
    return (
        <div >
            <img className={cs.logo} src="../src/assets/icons/logo.png" alt="DailyHub"/>
        </div>
    );
};

export default Logo;