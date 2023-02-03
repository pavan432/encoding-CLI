var readlineSync = require('readline-sync');
var coding = require('./coding/index.js');

function main() {
  console.log(`----------------------`);
  console.log('      Options');
  console.log(`----------------------`);
  var options = ['Exit the program', 'Encoding', 'Decoding'];
  options.forEach((ele, index) => {
    console.log(`${index} ${ele}`);
  });
  console.log(`----------------------`);
  var option = readlineSync.questionInt('Select from the menu: ');
  if (option >= 0 && option < options.length) {
    switch (option) {
      case 0:
        console.log('Okay! Bye Bye...');
        return;
      case 1:
        coding.encoding();
        break;
      case 2:
        coding.decoding();
        break;
    }
    var again = readlineSync.question('Want to perform again ? y/n : ');
    if (again === 'y' || again === 'Y' || again === 'yes') {
      main();
    }
  } else {
    console.clear();
    console.log('Wrong option. Select valid option from the menu.');
    main();
  }
}

main();
