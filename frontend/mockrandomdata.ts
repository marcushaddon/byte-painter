function makeData(size: number) {
    let arr = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 256);
    }
    return arr;
}

export default makeData;