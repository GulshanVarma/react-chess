import React from 'react'
import ImgBlock from './imgBlock/imgBlock'

export default (props) => {
    // return block(b/w)
    return (
        <div className={props.color} onClick={props.clicked} key={props.id} id={props.color+''+props.id}>
            <ImgBlock piece={props.piece} id={props.id} child={props.children}/>
        </div>
    );
}