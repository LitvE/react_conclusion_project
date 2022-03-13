import React from "react";
import UserCard from "../UserCard";
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';
import styles from './UserItem.module.css';

function UserItem (props){
    const{
        user,
        clickHandler,
    } = props;
    
    return(
        <div className={styles.userItemContainer}>
            <UserCard user={user}/>
            <Icon path={mdiCheckCircle} className={styles.iconStyle} onClick={clickHandler}/>
        </div>
        
    );
};

export default UserItem;