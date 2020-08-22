import React, { Component } from 'react'
import classes from './board.module.css'

class board extends Component {
    state = { board: true }

    selectHandler = (event) => {  
        if(document.getElementById(this.selectDiv)){document.getElementById(this.selectDiv).classList.remove('activeDiv')};
        document.getElementById(event.target.id).classList.add('activeDiv');
        this.selectDiv = event.target.id;
        console.log(event.target.id);
    }

        render() {
            let board = []
            for (let m = 0; m < 8; m++) {
                let arr = []
                for (let i = 0; i < 8; i++) {
                    (m % 2 !== 0) ?
                        (arr.push(<div key={'' + m + i} id={'' + m + i} onClick={this.selectHandler} className={i % 2 === 0 ? classes.whiteBox : classes.redBox}>{'' + m + i}</div>)) :
                        (arr.push(<div key={'' + m + i} id={'' + m + i} onClick={this.selectHandler} className={i % 2 === 0 ? classes.redBox : classes.whiteBox}>{'' + m + i}</div>));
                }
                board.push(<div id={"level" + m} className={classes.horizontal}>{arr}</div>)
            }
            return (
                <div className={classes.board}>
                    {React.Children.toArray(board)}
                </div>
                // this.test(board)
            );
        }
    }

    export default board;