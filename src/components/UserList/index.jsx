import React from "react";
import UserItem from "../UserItem";
import styles from './UserList.module.css'

class UserList extends React.Component{

    mapUsers = (u, index) => {
        const {id} = u;
        const clickHandler = () =>{
            const {users, setUsers} = this.props;

            const newUsers = [...users];
            newUsers[index] = {
                ...newUsers[index],
                 isSelected: !newUsers[index].isSelected,
                };

            setUsers(newUsers);
        };

        return <UserItem key={id} user = {u} clickHandler={clickHandler}/>;
    }
    
    render(){
        const {users} = this.props;
        return (
            <ul className={styles.ulStyle}>
                {users.map(this.mapUsers)}
            </ul>
        );
    };

};

export default UserList;