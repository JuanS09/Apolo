import React from 'react';
import Header from './Header';

export const Layout = (props) => {
    const {
        children,
    } = props;

    return (
    <>
        <Header />
        {children}
    </>);
};