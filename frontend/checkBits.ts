function checkBit(num: number, mask: number): boolean {
  // Return true if all of the 'on' bits in the mask
  // are also 'on' in the number.
  return ((num & mask) === mask);
}
  
export default function checkBits(num: number): boolean[] {
  // Return an array of booleans with true for each bit
  // switched to 'on' in the number, false otherwise.
  var setArr = [];
  var mask = 128;
  while (mask > 0) {
    setArr.push( checkBit(num, mask)  );
    mask = mask >>= 1;
  }

  return setArr;
}

