import React from 'react';
import styles from './style.module.sass'

const Greeting = props => {
    const { name,surname } = props;
    return <div>Hello, {name} {surname} !!</div>;
};

export default Greeting;
