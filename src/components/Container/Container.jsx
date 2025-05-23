import React from 'react';
import cs from "./Container.module.scss"
const Container = ({children}) => {
    return (
        <div className={cs.container}>
            {children}
        </div>
    );
};

export default Container;