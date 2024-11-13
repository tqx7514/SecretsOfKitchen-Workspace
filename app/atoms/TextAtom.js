import React from 'react';

const TextAtom = ({ children, className }) => {
    return <p className={`text-md font-bold ${className}`}>{children}</p>;
};

export default TextAtom;
