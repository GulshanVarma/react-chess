import React, { Component } from 'react'
import Board from '../components/board/board'

class initGame extends Component {
    state = {
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
        }, moves_played: []
    }

    current_move = []

    selectHandler = (event) => {
        let query = 'img[alt="' + event.target.alt + '"]';
        console.log('[select] = ', document.querySelector(query))
        this.current_move.push(event.target.alt)
        if (this.current_move.length === 2) {
            this.makeMove();
            return
        }

        console.log('cl = ', this.current_move)
        // console.log(document.getElementsByClassName(event.target.className))
    }

    makeMove = () => {
        let board_temp = { ...this.state.board }
        let i1 = -1, i2 = -1, id1 = '', id2 = '';

        try {
            id1 = this.current_move[0].slice(0, this.current_move[0].indexOf('imgB'))
            id2 = this.current_move[1].slice(0, this.current_move[1].indexOf('imgB'))
        } catch (error) { console.log('[makeMove error] slice ') }

        console.log('IDD = ', id1, id2)

        for (let i = 0; i < 64; i++) {
            if (board_temp[i] === id1) {
                i1 = i;
            }
            if (board_temp[i] === id2) {
                i2 = i;
            }
        }
        board_temp[i1] = id2;
        board_temp[i2] = id1;
        this.setState({ board: board_temp })
        this.current_move = []
    }


    render() {

        return (
            <Board board={this.state.board} clicked={this.selectHandler} />
        );
    }
}

export default initGame;