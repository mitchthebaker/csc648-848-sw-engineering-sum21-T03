import React from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CustomBtn from '../Modules/CustomBtn';

const styles = makeStyles({
    wrapper: {
       display: "flex",
       flexDirection: "column", 
       alignItems: "center", 
       padding: "0 4rem 0 4rem"
    }, 
    item: {
        display: "flex",
        flexDirection: "column",
       paddingTop: "1.0rem",
       alignItems: "center"

    }
})

function Grid(props) {
    const {icon, btnTitle} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <div className={classes.item}>
                <CustomBtn txt={btnTitle} />
            </div>
        </div>
    )
}

export default Grid
