import React, { Component } from 'react';
import Board from '../components/board/board';
import { playMove } from '../js scripts/moves';

class initGame extends Component {
    state = {   // maintain unique piece name or error
        board: {
            0: "br1",
            1: "bh1",
            2: "bb1",
            3: "bq1",
            4: "bk1",
            5: "bb2",
            6: "bh2",
            7: "br2",
            8: "bp1",
            9: "bp2",
            10: "bp3",
            11: "bp4",
            12: "bp5",
            13: "bp6",
            14: "bp7",
            15: "bp8",
            16: "ee1",
            17: "ee2",
            18: "ee3",
            19: "ee4",
            20: "ee5",
            21: "ee6",
            22: "ee7",
            23: "ee8",
            24: "ee9",
            25: "ee10",
            26: "ee11",
            27: "ee12",
            28: "ee13",
            29: "ee14",
            30: "ee15",
            31: "ee16",
            32: "ee17",
            33: "ee18",
            34: "ee19",
            35: "ee20",
            36: "ee21",
            37: "ee22",
            38: "ee23",
            39: "ee24",
            40: "ee25",
            41: "ee26",
            42: "ee27",
            43: "ee28",
            44: "ee29",
            45: "ee30",
            46: "ee31",
            47: "ee32",
            48: "wp1",
            49: "wp2",
            50: "wp3",
            51: "wp4",
            52: "wp5",
            53: "wp6",
            54: "wp7",
            55: "wp8",
            56: "wr1",
            57: "wh1",
            58: "wb1",
            59: "wq1",
            60: "wk1",
            61: "wb2",
            62: "wh2",
            63: "wr2"
        }, moves_played: [],ee_cnt : 0
    }   // ee_cnt to add new unique spaces when killed

    current_move = []
    possible_moves = []
    prev_queryElement = null;

    componentDidMount() {
        this.prev_queryElement = document.querySelector("img[alt='br1imgBlock_pieces__eGGWI']")  // default value   
    }

    selectHandler = (event) => {
        let query = 'img[alt="' + event.target.alt + '"]';

        if (document.querySelector(query)) document.querySelector(query).parentNode.style.borderColor = "greenyellow";
        else return;
        console.log('[select] = ', document.querySelector(query))

        console.log('[prev] = ', this.prev_queryElement.parentNode)
        this.prev_queryElement.parentNode.style.borderColor = "";

        this.current_move.push(event.target.alt)
        this.makeMove();
        this.prev_queryElement = document.querySelector(query)
        // if (this.current_move.length === 2) {
        //     this.makeMove();
        //     return
        // }

        console.log('curMove = ', this.current_move)
        // console.log(document.getElementsByClassName(event.target.className))
    }

    makeMove = () => {
        // // >>>> 2 moves movements
        // // let validation =
        // // if (validation) {
        //     let board_temp = { ...this.state.board }
        //     let i1 = -1, i2 = -1, id1 = '', id2 = '';

        //     try {
        //         id1 = this.current_move[0].slice(0, this.current_move[0].indexOf('imgB'))
        //         id2 = this.current_move[1].slice(0, this.current_move[1].indexOf('imgB'))
        //     } catch (error) { console.log('[makeMove error] slice ') }

        //     console.log('IDD = ', id1, id2)

        //     for (let i = 0; i < 64; i++) {
        //         if (board_temp[i] === id1) {
        //             i1 = i;
        //         }
        //         if (board_temp[i] === id2) {
        //             i2 = i;
        //         }
        //     }
        //     board_temp[i1] = id2;
        //     board_temp[i2] = id1;
        //     this.setState({ board: board_temp })
        //     this.current_move = []
        // // } else {
        // //     return
        // // }

        // >> 1 move movements

        let move_index1 = -1, move_index2 = -1, id = '', id2 = '';
        let board_temp = { ...this.state.board }
        let move_valid = false
        // this.possible_moves = []

        try {
            id = this.current_move[0].slice(0, this.current_move[0].indexOf('imgB'))
            id2 = this.current_move[1].slice(0, this.current_move[1].indexOf('imgB'))
        } catch (error) { console.log('[makeMove error] slice ') }

        for (let j = 0; j < 64; j++) {      // find index 
            if (board_temp[j] === id) {
                move_index1 = j;
            }
            if (board_temp[j] === id2) {
                move_index2 = j;
            }
        }
        console.log('[Movements] = ', id[1], move_index1, id2[1], move_index2);

        // 1. get moves
        if (this.current_move.length === 1) {
            this.possible_moves = playMove(id[1], move_index1, id[0], {...this.state.board})
            console.log('[poss moves] = ', this.possible_moves)
            // 2. color border of those
            for (let i = 0; i < this.possible_moves.length; i++) {
                let nodeId = document.querySelector('[id$="' + this.possible_moves[i] + '"]').id
                if(nodeId) document.getElementById(nodeId).style.borderColor = "orange"
            }
        }
        else {
            // 3. get input 2 and check

            for (let j = 0; j <= this.possible_moves.length; j++) {
                // console.log('>>>',this.possible_moves.length,this.possible_moves[j], move_index2)
                if (this.possible_moves[j] === move_index2) {
                    // 3.a. play move
                    move_valid = true
                    console.log('making move')
                    board_temp[move_index1] = id2;
                    board_temp[move_index2] = id;
                    this.setState({ board: board_temp })
                    
                    // 3.a. remove border
                    let query = 'img[alt="' + this.current_move[0] + '"]';
                    if (document.querySelector(query)) document.querySelector(query).parentNode.style.borderColor = "";

                    for (let i = 0; i < this.possible_moves.length; i++) {
                        let nodeId = document.querySelector('[id$="' + this.possible_moves[i] + '"]').id
                        if(nodeId) document.getElementById(nodeId).style.borderColor = ""
                    }

                    // this.possible_moves=[]
                    this.current_move = []
                    break;
                }
            }
            if (!move_valid) {
                console.log(" move invalid")
                let query = 'img[alt="' + this.current_move[1] + '"]';
                if (document.querySelector(query)) document.querySelector(query).parentNode.style.borderColor = ""; // remove current div border
                // this.current_move.pop();
                // query = 'img[alt="' + this.current_move[0] + '"]';
                // if (document.querySelector(query)) document.querySelector(query).parentNode.style.borderColor = "greenyellow";     //restore prev border
                this.current_move = []
                for (let i = 0; i < this.possible_moves.length; i++) {
                    let nodeId = document.querySelector('[id$="' + this.possible_moves[i] + '"]').id
                    if(nodeId) document.getElementById(nodeId).style.borderColor = ""
                }
            }
            // 4. check if valid from the list
        }

    }

    render() {

        return (
            <Board board={this.state.board} clicked={this.selectHandler} />
        );
    }
}

export default initGame;