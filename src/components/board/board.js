import React from 'react'
import classes from './board.module.css'
import BoardBlock from './boardBlock/boardBlock'

export default (props) => {
    // return 8x8 board
    let board1 = [], toggle = true, color = null, m = 0;
    let arr = []
    while (m < 64) {
        arr = []
        for (let i = 0; i < 8; i++) {
            toggle ? color = classes.whiteBox : color = classes.redBox;
            arr.push(<BoardBlock piece={props.board[m]} key={m} id={m} clicked={props.clicked} color={color} />)
            m++;
            if (i === 7) continue
            toggle = !toggle;

        }
        board1.push(<div key={m} className={classes.horizontal}>{arr}</div>);
    }

    arr = []
    let left_side = [], bottom_side = [],temp = []
    for (let i = 0; i < 8; i++) {
        arr.push(<BoardBlock piece={'EE'} key={i} color={classes.whiteBox}>{8 - i}</BoardBlock>)        // 8-> 0
        temp.push(<BoardBlock piece={'EE'} key={i} color={classes.whiteBox}>{String.fromCharCode(65+i)}</BoardBlock>)       // A->H
    }
    left_side = <div style={{ marginTop: "60px" }}>{arr}</div>
    bottom_side = <div style={{marginInlineStart: "65px",display:"-webkit-inline-box"}}>{temp}</div>
    return (
        <div>
            <div style={{ display: "inline-flex" }}>
                {left_side}
                <div className={classes.board}>
                    {board1}
                </div>
            </div>
            {bottom_side}
        </div>
    );
}
