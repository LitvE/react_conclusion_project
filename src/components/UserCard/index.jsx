import React from "react";
import UserAvatar from "../UserAvatar";
import UserInfo from "../UserInfo";
import styles from './UserCard.module.css';


function UserCard ({user}){
    
    return(
        <div className={styles.cardContainer}>
            <UserAvatar user={user}/>
            <UserInfo user={user}/>
        </div>

    );
};

export default UserCard;