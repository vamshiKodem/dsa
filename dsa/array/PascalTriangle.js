// 118 Pascal Triangle

const generate = (numRows) => {
  const output = [];
  for (let i = 0; i < numRows; i++) {
    output[i] = [];
    output[i][0] = 1;
    for (let j = 1; j < i; j++) {
      output[i][j] = output[i - 1][j - 1] + output[i - 1][j];
    }
    output[i][i] = 1;
  }
  return output;
};

generate(4);
// [[1],[1,1],[1,2,1],[1,3,3,1]]

// 119. Pascal's Triangle II
const getRow = (row) => {
  const output = [];
  for (let i = 0; i <= row; i++) {
    output[i] = [];
    output[i][0] = 1;
    for (let i = 0; i < j; j++) {
      output[i][j] = output[i - 1][j - 1] + output[i - 1][j];
    }
    output[i][i] = 1;
  }
  return output[row];
};

getRow(3);
// [1,3,3,1]
