let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


//00  01  02         12  22         21 20         10  11 


let i = 0;
let j = 0;
let output = []
let count = 0;
let totalEle = (arr.length * arr[0].length)
while (count < totalEle) {
    for (j = 0; j < arr[0].length; j++) {
        output.push(arr[i][j])
        count++
    }
    i++; j--;
    // console.log(i, j)


    for (; i < arr.length; i++) {
        output.push(arr[i][j])
        count++
    }
    i--; j--;
    // console.log(i, j)


    for (; j >= 0; j--) {
        output.push(arr[i][j])
        count++
    }
    i--; j++;
    // console.log(i, j)


    for (; j < arr[0].length - 1; j++) {
        output.push(arr[i][j])
        count++
    }
    i++; j++
    // }
    console.log(output)

}




//--------------------------------------------------------------------

// Optimal Solution 
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
