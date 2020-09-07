const oneToTwo = (board, board2, index) => {
    let p = board[index]
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board2[i][j] === p)
                return [i, j]
        }
    }
}

const twoToOne = (board, board2, r, c) => {
    let p = board2[r][c];
    for (let i = 0; i < 64; i++) {
        if (board[i] === p)
            return i
    }
}


const validate_move = (r, c, piece_color, board, piece = 'e', pawnHeadon = false) => {
    if (!((r >= 0 && r <= 7) && (c >= 0) && (c <= 7))) {
        return 0    // border condition
    }
    //1. is empty 
    if (board[r][c].slice(0, 2) === 'ee') {
        return 1;
    } else {
        //2. is enemy
        if (pawnHeadon) return 0;   // pawn adjustment, straight move
        if (board[r][c].slice(0, 1) !== piece_color) {
            if (piece === 'p') return 3; // pawn adjustment, cross kill
            if (piece === 'r') return 3;         // 3 means save and abandon afterwards
            if (piece === 'b') return 3;
            return 1;
        }
        else { // your own piece
            if (piece === 'r') return 2;             // 2 means dont save afterwards
            if (piece === 'b') return 2;             // 2 means dont save afterwards
            return 0;
        }
    }

}

const pawnMoves = (start, piece_color, board_single, board) => {
    let piece = board_single[start].slice(1, 2);
    let possible_moves = [];
    let rc = oneToTwo(board_single, board, start)
    if (piece_color === 'w') {
        if (rc[0] === 6) if (validate_move(rc[0] - 1, rc[1], piece_color, board, piece) === 1) if (validate_move(rc[0] - 2, rc[1], piece_color, board, piece) > 0)
            possible_moves.push(twoToOne(board_single, board, rc[0] - 2, rc[1]))
        if (validate_move(rc[0] - 1, rc[1], piece_color, board, piece, true) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] - 1, rc[1]))
        if (validate_move(rc[0] - 1, rc[1] + 1, piece_color, board, piece) === 3) possible_moves.push(twoToOne(board_single, board, rc[0] - 1, rc[1] + 1))  //if enemy
        if (validate_move(rc[0] - 1, rc[1] - 1, piece_color, board, piece) === 3) possible_moves.push(twoToOne(board_single, board, rc[0] - 1, rc[1] - 1))  //if enemy
    } else {
        if (rc[0] === 1) if (validate_move(rc[0] + 1, rc[1], piece_color, board, piece) === 1) if (validate_move(rc[0] + 2, rc[1], piece_color, board, piece) > 0)
            possible_moves.push(twoToOne(board_single, board, rc[0] + 2, rc[1]))
        if (validate_move(rc[0] + 1, rc[1], piece_color, board, piece, true) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] + 1, rc[1]))
        if (validate_move(rc[0] + 1, rc[1] + 1, piece_color, board, piece) === 3) possible_moves.push(twoToOne(board_single, board, rc[0] + 1, rc[1] + 1))  //if enemy
        if (validate_move(rc[0] + 1, rc[1] - 1, piece_color, board, piece) === 3) possible_moves.push(twoToOne(board_single, board, rc[0] + 1, rc[1] - 1))  //if enemy
    }
    return possible_moves;
};

const kingMoves = (start, piece_color, board_single, board) => {
    let possible_moves = [];
    let rc = oneToTwo(board_single, board, start)
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (validate_move(rc[0] + i, rc[1] + j, piece_color, board) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] + i, rc[1] + j))
        }
    }
    return possible_moves;
};

const rookMoves = (start, piece_color, board_single, board) => {
    let possible_moves = [];
    let piece = 'r';
    let rc = oneToTwo(board_single, board, start)
    let f1 = false, f2 = false, f3 = false, f4 = false
    let t = 0;
    for (let i = 1; i < 8; i++) {
        t = validate_move(rc[0] + i, rc[1], piece_color, board, piece)
        if (t > 0 && !f1) { if (t === 2) { f1 = true } else { possible_moves.push(twoToOne(board_single, board, rc[0] + i, rc[1])); if (t === 3) f1 = true } }

        t = validate_move(rc[0] - i, rc[1], piece_color, board, piece)
        if (t > 0 && !f2) { if (t === 2) { f2 = true } else { possible_moves.push(twoToOne(board_single, board, rc[0] - i, rc[1])); if (t === 3) f2 = true } }

        t = validate_move(rc[0], rc[1] + i, piece_color, board, piece)
        if (t > 0 && !f3) { if (t === 2) { f3 = true } else { possible_moves.push(twoToOne(board_single, board, rc[0], rc[1] + i)); if (t === 3) f3 = true } }

        t = validate_move(rc[0], rc[1] - i, piece_color, board, piece)
        if (t > 0 && !f4) { if (t === 2) { f4 = true } else { possible_moves.push(twoToOne(board_single, board, rc[0], rc[1] - i)); if (t === 3) f4 = true } }
    }
    return possible_moves;
};

const bishopMoves = (start, piece_color, board_single, board) => {
    let possible_moves = [];
    let piece = 'b';
    let rc = oneToTwo(board_single, board, start)
    let f1 = false, f2 = false, f3 = false, f4 = false
    let t = 0;
    for (let i = 1; i < 8; i++) {
        t = validate_move(rc[0] + i, rc[1] + i, piece_color, board, piece)
        if (t > 0 && !f1) { if (t === 2) { f1 = true } else { possible_moves.push(twoToOne(board_single, board, rc[0] + i, rc[1] + i)); if (t === 3) f1 = true } }

        t = validate_move(rc[0] - i, rc[1] - i, piece_color, board, piece)
        if (t > 0 && !f2) { if (t === 2) { f2 = true } else { possible_moves.push(twoToOne(board_single, board, rc[0] - i, rc[1] - i)); if (t === 3) f2 = true } }

        t = validate_move(rc[0] - i, rc[1] + i, piece_color, board, piece)
        if (t > 0 && !f3) { if (t === 2) { f3 = true } else { possible_moves.push(twoToOne(board_single, board, rc[0] - i, rc[1] + i)); if (t === 3) f3 = true } }

        t = validate_move(rc[0] + i, rc[1] - i, piece_color, board, piece)
        if (t > 0 && !f4) { if (t === 2) { f4 = true } else { possible_moves.push(twoToOne(board_single, board, rc[0] + i, rc[1] - i)); if (t === 3) f4 = true } }
    }
    return possible_moves;
};

const queenMoves = (start, piece_color, board_single, board) => {
    let possible_moves = []
    possible_moves = bishopMoves(start, piece_color, board_single, board)
    possible_moves = [...possible_moves, ...rookMoves(start, piece_color, board_single, board)]
    return possible_moves
};

const knightMoves = (start, piece_color, board_single, board) => {
    let possible_moves = [];
    let rc = oneToTwo(board_single, board, start)
    if (validate_move(rc[0] - 2, rc[1] - 1, piece_color, board, true) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] - 2, rc[1] - 1))
    if (validate_move(rc[0] - 2, rc[1] + 1, piece_color, board, true) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] - 2, rc[1] + 1))
    if (validate_move(rc[0] + 2, rc[1] - 1, piece_color, board, true) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] + 2, rc[1] - 1))
    if (validate_move(rc[0] + 2, rc[1] + 1, piece_color, board, true) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] + 2, rc[1] + 1))
    if (validate_move(rc[0] + 1, rc[1] - 2, piece_color, board, true) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] + 1, rc[1] - 2))
    if (validate_move(rc[0] + 1, rc[1] + 2, piece_color, board, true) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] + 1, rc[1] + 2))
    if (validate_move(rc[0] - 1, rc[1] - 2, piece_color, board, true) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] - 1, rc[1] - 2))
    if (validate_move(rc[0] - 1, rc[1] + 2, piece_color, board, true) > 0) possible_moves.push(twoToOne(board_single, board, rc[0] - 1, rc[1] + 2))
    return possible_moves;
};

export const playMove = (piece, start, piece_color, board_single) => {
    let board = [], temp = [], i = 0  // 1d to 2d
    while (i < 64) {
        temp = []
        for (let j = 0; j < 8; j++) {
            temp.push(board_single[i]);
            i++;
        }
        board.push(temp)
    }
    switch (piece) {
        case 'r': return (rookMoves(start, piece_color, board_single, board))
        case 'b': return (bishopMoves(start, piece_color, board_single, board))
        case 'q': return (queenMoves(start, piece_color, board_single, board))
        case 'k': return (kingMoves(start, piece_color, board_single, board))
        case 'h': return (knightMoves(start, piece_color, board_single, board))
        case 'p': return (pawnMoves(start, piece_color, board_single, board))
        default: return ([])
    }

}