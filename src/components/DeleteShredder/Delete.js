import React from 'react';
import styles from './Delete.scss';

const Delete = () => {
    return (
        <div class={styles["cont"]}>
            <div class={styles["paper"]}></div>
            <button className={styles["button-delete"]}>
                <div class={styles['loader']}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>Deleting</button>
            <div class={styles["g-cont"]}>
                <div class={styles["garbage"]}></div>
                <div class={styles["garbage"]}></div>
                <div class={styles["garbage"]}></div>
                <div class={styles["garbage"]}></div>
                <div class={styles["garbage"]}></div>
                <div class={styles["garbage"]}></div>
                <div class={styles["garbage"]}></div>
                <div class={styles["garbage"]}></div>
            </div>
        </div>
    );
};

export default Delete;