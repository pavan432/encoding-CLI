var readlineSync = require('readline-sync');

function encoding() {
  console.clear();
  var input = readlineSync.question('Enter input data to Encode: ');
  console.log('Entered data: ', input);
  var inputArray = input.split('');
  console.log('Entered data in Array: ', inputArray);
  var inputAscii = inputArray.map((ele) => ele.charCodeAt(0));
  console.log('Array ASCII values: ', inputAscii);
  var inputAsciiBinary = inputAscii.map((ele) => ele.toString(2));
  console.log('Binary values of ASCII values: ', inputAsciiBinary);
  var inputAsciiBinary8bit = inputAsciiBinary.map((ele) => {
    while (ele.length < 8) {
      ele = '0' + ele;
    }
    return ele;
  });
  console.log('8bit Binary values: ', inputAsciiBinary8bit);
  var inputBinaryJoin = inputAsciiBinary8bit.join('');
  var inputAsciiBinary6bit = [];
  for (let i = 0, j = 6; i < inputBinaryJoin.length; i = i + 6, j = j + 6) {
    var binary6bit = inputBinaryJoin.slice(i, j);
    inputAsciiBinary6bit.push(binary6bit);
  }
  var padding = false;
  if (inputAsciiBinary6bit[inputAsciiBinary6bit.length - 1].length !== 6) {
    var str = inputAsciiBinary6bit[inputAsciiBinary6bit.length - 1];
    var c = '';
    while (str.length < 6) {
      str = str + '0';
      c += '=';
    }
    inputAsciiBinary6bit[inputAsciiBinary6bit.length - 1] = str;
    padding = true;
  }
  console.log('6bit binary values: ', inputAsciiBinary6bit);
  var input6bitBinaryToNum = inputAsciiBinary6bit.map((ele) =>
    parseInt(ele, 2)
  );
  console.log('6bit binary to Decimal values: ', input6bitBinaryToNum);
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var encodedInput = input6bitBinaryToNum
    .map((ele) => {
      return characters[ele];
    })
    .join('');
  if (padding) {
    console.log('Encoded data: ', encodedInput + c.slice(0, c.length / 2));
  } else {
    console.log('Encoded data: ', encodedInput);
  }
}

module.exports = encoding;
