import React, { Component } from 'react'
import classes from '../board/board.module.css'
import ReactDOM from 'react-dom';

import BK from '../assets/chesspieces/BK.png'
import BB from '../assets/chesspieces/BB.png'
import BH from '../assets/chesspieces/BH.png'
import BP from '../assets/chesspieces/BP.png'
import BQ from '../assets/chesspieces/BQ.png'
import BR from '../assets/chesspieces/BR.png'
import EE from '../assets/chesspieces/EE.png'
import WB from '../assets/chesspieces/WB.png'
import WH from '../assets/chesspieces/WH.png'
import WK from '../assets/chesspieces/WK.png'
import WP from '../assets/chesspieces/WP.png'
import WQ from '../assets/chesspieces/WQ.png'
import WR from '../assets/chesspieces/WR.png'

import * as data from '../board.json';


//import board from json
//render board and put images

class board extends Component {
    state = { board: null , turn : true, whiteKilled: null, blackKilled: null}// initialized in prg

    componentDidMount() {
        let img_sample = <img src={BR} alt='' width="50px" height="50px"></img>;
        let temp = Object.values(data).map((el) => {
            return Object.values(el).map(elem => {
                console.log(elem)
                return elem;
            })
        })
        
        this.setState({board : temp[0]})    // init state
        // task: to modify JSON from state
        // use board from now on


        if (temp[0].length === 64) {  //checking json len
            for (let i = 0; i < 64; i++) {
                console.log('in for loop, ', temp[0][i], i, document.getElementById(i))

                switch (temp[0][i]) {
                    case 'BR':
                        img_sample = <img src={BR} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'BB':
                        img_sample = <img src={BB} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'BH':
                        img_sample = <img src={BH} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'BK':
                        img_sample = <img src={BK} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'BP':
                        img_sample = <img src={BP} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'BQ':
                        img_sample = <img src={BQ} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'EE':
                        img_sample = <img src={EE} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'WR':
                        img_sample = <img src={WR} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'WB':
                        img_sample = <img src={WB} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'WH':
                        img_sample = <img src={WH} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'WK':
                        img_sample = <img src={WK} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'WP':
                        img_sample = <img src={WP} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    case 'WQ':
                        img_sample = <img src={WQ} id={'i'+i} alt='' className={classes.pieces}></img>
                        break;
                    default:
                        console.log('switch default')
                        img_sample = <img src={BR} alt='' width="70px" height="70" style={{ "display": "block", "margin": "auto" }}></img>
                        break;
                }
                // img_sample = <img src={BR} alt='' width="70px" height="70" style={{"display": "block","margin": "auto"}}></img>
                try {
                    ReactDOM.render(img_sample, document.getElementById(i));
                } catch (error) { console.log('err in for loop'); }
            }
        }
    }

    selectHandler = (event) => {
        console.log(event.target.parentNode.id)
    }

    render() {
        console.log('rendering')
        console.log('board.js')
        let board = []
        let arr = []

        let m = 0, toggle = true;
        let color = null;
        while (m < 64) {
            console.log('m = ', m);
            let arr = []
            for (let i = 0; i < 8; i++) {
                toggle ? color = classes.whiteBox : color = classes.redBox;
                console.log(' > m,i = ', m, i);
                arr.push(<div key={m} id={m} onClick={this.selectHandler} className={color}>{m}</div>)
                m++;
                if (i === 7) {
                    continue
                }
                toggle = !toggle;

            }
            board.push(<div id={"level" + m} className={classes.horizontal}>{arr}</div>)
            console.log(this.state.board)
        }

        return (
            <div className={classes.board}>
                {React.Children.toArray(board)}
            </div>
        );
    }
}

export default board;