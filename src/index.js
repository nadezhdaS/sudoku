module.exports = function solveSudoku(matrix) {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (checkPosition(matrix, i, j, num)) {
                        matrix[i][j] = num;
                        if (solveSudoku(matrix)) {
                            return matrix;
                        }
                        else {
                            matrix[i][j] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }

    return matrix
};

function checkRow(matrix, row, currentNumber) {
    for (let k = 0; k < 9; k++) {
        if (matrix[row][k] === currentNumber) {
            return false
        }
    }
    return true
}

function checkColumn(matrix, column, currentNumber) {
    for (let k = 0; k < 9; k++) {
        if (matrix[k][column] === currentNumber) {
            return false
        }
    }
    return true
}

function checkBlock(matrix, row, column, currentNumber) {
    let rows = Math.floor(row / 3) * 3;
    let cols = Math.floor(column / 3) * 3;
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (matrix[rows + r][cols + c] === currentNumber) {
                return false;
            }
        }
    }
    return true;
}

function checkPosition(matrix, row, column, currentNumber) {
    return checkRow(matrix, row, currentNumber)
        && checkColumn(matrix, column, currentNumber)
        && checkBlock(matrix, row, column, currentNumber);
}
