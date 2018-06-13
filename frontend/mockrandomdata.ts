const data = (function() {
    let arr = new Uint8Array(1000);
    for (let i = 0; i < 1000; i++) {
        arr[i] = Math.floor(Math.random() * 256);
    }
    return arr;
})();

export default data;