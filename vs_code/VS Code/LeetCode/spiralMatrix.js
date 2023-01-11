let matrix = [[1, 2, 3, 4,5], [1, 2, 3, 4,5], [1, 2, 3, 4,5],[1, 2, 3, 4,5],[1, 2, 3, 4,5]]

let m = matrix.length;
let n = matrix[0].length;

let min_row = 0;
let min_col = 0;

let max_row = matrix.length - 1;
let max_col = matrix[0].length - 1;

let counter = 0;
let total_elements = (m * n);
let res = [];

while (counter < total_elements) {

    // Top Wall:
    for (let j = min_col, i = min_row; j <= max_col && counter < total_elements; j++) {
        res.push(matrix[i][j]);
        counter++;
    }
    min_row++;


    // Right Wall:
    for (let i = min_row, j = max_col; i <= max_row && counter < total_elements; i++) {
        res.push(matrix[i][j]);
        counter++;
    }
    max_col--;


    // Bottom Wall:
    for (let j = max_col, i = max_row; j >= min_col && counter < total_elements; j--) {
        res.push(matrix[i][j]);
        counter++;
    }
    max_row--;


    // Left Wall:
    for (let i = max_row, j = min_col; i >= min_row && counter < total_elements; i--) {
        res.push(matrix[i][j]);
        counter++;
    }
    min_col++;

}
console.log(res);