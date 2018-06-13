function checkBit(num: number, mask: number): boolean {
    return ((num & mask) !== 0);
  }
  
export default function checkBits(num: number): boolean[] {
  var setArr = [];
  var mask = 128;
  while (mask > 0) {
    setArr.push( checkBit(num, mask)  );
    mask = mask >>= 1;
  }

  return setArr;
}

