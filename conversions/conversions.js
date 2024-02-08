// Function to convert binary to ASCII
function binaryToAscii(binary) {
  let str = '';
  if (binary.length > 8) {
      for (let i = 0; i < binary.length; i += 8) {
          let firstCode = binary.slice(i,i+8)
          str += String.fromCharCode(parseInt(firstCode, 2))            
      }
      
  }
  else {
      str += String.fromCharCode(parseInt(binary, 2))
      
  }
  return str;
}

// Function to convert hex to ASCII
function hexToAscii(hex) {
    let str = '';
  if (hex.length > 2) {
      for (let i = 0; i < hex.length; i+=2) {
          let bit = hex.slice(i,i+2)
          str+= String.fromCharCode(parseInt(bit, 16))
      }
  } else str += String.fromCharCode(parseInt(hex, 16))
  return str;

}

// Function to convert ASCII to decimal
function asciiToDecimal(ascii) {
  let arr = [];
  if (ascii.length > 1) {
      for (let i = 0; i < ascii.length; i++) {
          arr.push(ascii.charCodeAt(i));
      }
      return arr
  } else return ascii.charCodeAt(0);

}

// Function to convert decimal to ASCII
function decimalToAscii(decimal) {
  let str = '';
  if (decimal.length > 1) {
      for (let i = 0; i < decimal.length; i++) {
          str += String.fromCharCode(parseInt(decimal[i],10))
      }
      return str
  } else return String.fromCharCode(parseInt(decimal, 10));

}

// Function to convert decimal to hexadecimal
function decimalToHex(decimal) {
  return '0x' + decimal.toString(16);
  }

// Function to convert hexadecimal to decimal
function hexToDecimal(hex) {
  //dont forget if it has 0x in front to slice it hex.slice(2)
  return parseInt(hex, 16)
}

// Function to convert decimal to binary
function decimalToBinary(decimal) {
  return '0b' + decimal.toString(2)
}

// Function to convert binary to decimal
function binaryToDecimal(binary) {
  // dont forget if it has 0b in front to slice it binary.slice(2)
  return parseInt(binary, 2)
}

// Test cases
console.log("Binary to ASCII: ");
console.log(binaryToAscii("01000001"));      // Expected output: "A"
console.log(binaryToAscii("01101000"));      // Expected output: "h"
console.log(binaryToAscii("01001000"));      // Expected output: "H"
console.log(binaryToAscii("00100001"));      // Expected output: "!"
console.log(binaryToAscii("01111110"));      // Expected output: "~"
console.log(binaryToAscii('01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001')); // Expected output: "Hello, World!"

console.log("\nHex to ASCII: ");
console.log(hexToAscii("41"));    // Expected output: "A"
console.log(hexToAscii("68"));    // Expected output: "h"
console.log(hexToAscii("48"));    // Expected output: "H"
console.log(hexToAscii("21"));    // Expected output: "!"
console.log(hexToAscii("7E"));    // Expected output: "~"
console.log(hexToAscii("48657820746F2041534349492074657374")); // Expected output: "Hex to ASCII test"

console.log("\nASCII to Decimal: ");
console.log(asciiToDecimal("A")); // Expected output: 65
console.log(asciiToDecimal("a")); // Expected output: 97
console.log(asciiToDecimal("H")); // Expected output: 72
console.log(asciiToDecimal("!")); // Expected output: 33
console.log(asciiToDecimal("~")); // Expected output: 126
console.log(asciiToDecimal("Hello"));// Expected output: [72, 101, 108, 108, 111]

console.log("\nDecimal to ASCII: ");
console.log(decimalToAscii(65));  // Expected output: "A"
console.log(decimalToAscii(97));  // Expected output: "a"
console.log(decimalToAscii(72));  // Expected output: "H"
console.log(decimalToAscii(33));  // Expected output: "!"
console.log(decimalToAscii(126)); // Expected output: "~"
console.log(decimalToAscii([72, 101, 108, 108, 111])); // Expected output: "Hello"

console.log("\nDecimal to Hexadecimal: ");
console.log(decimalToHex(15));    // Expected output: "F"
console.log(decimalToHex(31));    // Expected output: "1F"
console.log(decimalToHex(48));    // Expected output: "30"
console.log(decimalToHex(255));   // Expected output: "FF"
console.log(decimalToHex(1024));  // Expected output: "400"

console.log("\nHexadecimal to Decimal: ");
console.log(hexToDecimal("1F"));    // Expected output: 31
console.log(hexToDecimal("7E"));    // Expected output: 126
console.log(hexToDecimal("FF"));    // Expected output: 255
console.log(hexToDecimal("400"));   // Expected output: 1024

console.log("\nDecimal to Binary: ");
console.log(decimalToBinary(10));    // Expected output: "1010"
console.log(decimalToBinary(25));    // Expected output: "11001"
console.log(decimalToBinary(128));   // Expected output: "10000000"
console.log(decimalToBinary(255));   // Expected output: "11111111"

console.log("\nBinary to Decimal: ");
console.log(binaryToDecimal("1010"));      // Expected output: 10
console.log(binaryToDecimal("11001"));     // Expected output: 25
console.log(binaryToDecimal("10000000"));  // Expected output: 128
console.log(binaryToDecimal("11111111"));  // Expected output: 255
