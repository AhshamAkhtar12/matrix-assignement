const  matrix1 = [
    [3, 2, 4],
    [5, 4, 6],
    [1, 0, 90],
];
const  matrix2 = [
    [7, 2, 1],
    [5, 9, 2],
    [1, 0, 19],
];
let result = [[], [], []];
for (let i=0; i<matrix1.length; i++){
    for (let j=0; j<matrix1[0].length; j++){
        result[i][j]=matrix1[i][j] + matrix2[i][j]
        // console.log(matrix1[i][j] + matrix2[i][j])
    }
}
  console.log(result);
  