import React from "react";
import styles from './UsersSelectedList.module.css';

function UsersSelectedList(props){
    const {users} = props;
    const filtredUsers = users.filter(u=>u.isSelected);
    return(
        <div className={styles.container}>
            <p>To: </p>
            <div>
                {filtredUsers.map((fu) => (
                    <span key={fu.id}>{fu.name} {fu.surname}, </span>
                ))}
            </div>
        </div>

    );
}

export default UsersSelectedList;