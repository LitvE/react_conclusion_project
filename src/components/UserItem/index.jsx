import React, { useState } from "react";
import UserCard from "../UserCard";
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';
import styles from './UserItem.module.css';

function UserItem (props){
    const{
        user,
        clickHandler,
    } = props;

    const [isClicked, setIsClicked] = useState(false);

    const onClickHandler = () => {
        setIsClicked(!isClicked);
        clickHandler();
    };

    return(
        <div className={styles.userItemContainer}>
            <UserCard user={user}/>
            <Icon path={mdiCheckCircle} className={isClicked ?styles.iconStyle2 : styles.iconStyle1} onClick={onClickHandler}/>
        </div>
        
    );
};

export default UserItem;