import React from 'react';
import styles from './Loading.scss';

const Loading = () => {
    return (
        <div class={styles["dot"]}>
            <span class={styles["color-1"]}></span>
            <span class={styles["color-2"]}></span>
            <span class={styles["color-3"]}></span>
            <span class={styles["color-4"]}></span>
        </div>
    );
};

export default Loading;