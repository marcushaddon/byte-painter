import checkBits from './checkBits';


export default class Painter {
  private _width: number;
  private _height: number;
  private _numChannels: number;

  private _canvasContext: CanvasRenderingContext2D;
  private _imgData: ImageData;
  private _currentChannel: number;

  constructor(private _canvas: HTMLCanvasElement) {
    // number pixels x 4 uints for each channel
    this._canvasContext = this._canvas.getContext('2d');

    this._width = this._canvas.width;
    this._height = this._canvas.height;
    this._numChannels = this._width * this._height * 4;

    let size = this._width * this._height;
    this._imgData = this._canvasContext.getImageData(0,0, this._width, this._height);
    this._currentChannel = 0;
  }

  private _setPixel(pixelNo: number, color: number[]): void {
    [ this._imgData.data[pixelNo],
    this._imgData.data[pixelNo + 1],
    this._imgData.data[pixelNo + 2] ] = color;
  }

  process(newData: Uint8ClampedArray): void {
    const data = this._imgData.data;
    for (let i = 0, length = newData.length; i < length; i++) {
      let byte = newData[i];
      let setBits: boolean[] = checkBits(byte);

      for (let setBit of setBits) {
        
        // TODO: COMMENT THIS!
        [
          data[this._currentChannel],
          data[this._currentChannel + 1],
          data[this._currentChannel + 2],
          data[this._currentChannel + 3]
        ] = setBit ? [255,255,255,255] : [0,0,0,255]

        // Restart every time
        this._currentChannel = (this._currentChannel + 4) % this._numChannels;
      }
    }
  }

  commit(): void {
    this._canvasContext.putImageData(this._imgData, 0, 0);
  }

}