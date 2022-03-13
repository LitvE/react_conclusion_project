import React, { Fragment } from 'react';
import ColorHash from 'color-hash';
import styles from './UserAvatar.module.css'

function UserAvatar({user: {name, surname, imageSrc}}) {
    const funBG = (name, surname) => {
        let colorHash = new ColorHash();
        const bg = colorHash.rgb(`${name} ${surname}`);
        let bgColor = `rgb(${bg.toString()})`;
        return bgColor;
    };

    if(imageSrc && imageSrc.includes('http')){
        return (
            <div className={styles.avatar_container}>
                <img src={imageSrc} alt='avatar'/>
            </div>
        )
    }else {

        return(
            <Fragment>
                <div style={{backgroundColor: funBG(name, surname)}} className={styles.avatar_container}>
                    <p>{name[0] + surname[0]}</p>
                </div>
            </Fragment>
            
        )
    }
}

export default UserAvatar;