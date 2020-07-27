import React from 'react';
import styles from './Loading.scss';

const Loading = ({text}) => {
    return (
        <div class={styles["dot"]}>
            { text.split("").map(chr => (<span>{chr}</span>))}
        </div>
    );
};

export default Loading;