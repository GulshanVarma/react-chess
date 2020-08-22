import React from 'react' //imrc
import classes from './boardBox.module.css'

export default (props) => {
    return (<div key={props.key} id={props.id} onClick={props.clicked} className={classes.redBox}>hi</div>)
}