const fs = require('fs');
const path = require('path');

const pngPath = path.join(__dirname, '..', 'Portfolio-main', 'public', 'favicon.svg.png');
const outPath = path.join(__dirname, '..', 'Portfolio-main', 'public', 'favicon.ico');

if (!fs.existsSync(pngPath)) {
  console.error('PNG source not found:', pngPath);
  process.exit(1);
}

const png = fs.readFileSync(pngPath);
// PNG IHDR width/height are at offset 16 and 20 (big-endian)
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);

const widthByte = (width >= 256) ? 0 : width;
const heightByte = (height >= 256) ? 0 : height;

const pngSize = png.length;
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // image type: 1 = icon
icoHeader.writeUInt16LE(1, 4); // number of images

const dirEntry = Buffer.alloc(16);
dirEntry.writeUInt8(widthByte, 0); // width
dirEntry.writeUInt8(heightByte, 1); // height
dirEntry.writeUInt8(0, 2); // color palette
dirEntry.writeUInt8(0, 3); // reserved
dirEntry.writeUInt16LE(1, 4); // color planes
dirEntry.writeUInt16LE(32, 6); // bits per pixel
dirEntry.writeUInt32LE(pngSize, 8); // size of image data
dirEntry.writeUInt32LE(6 + 16, 12); // offset of image data

const out = Buffer.concat([icoHeader, dirEntry, png]);
fs.writeFileSync(outPath, out);
console.log('Wrote', outPath, '(', pngSize, 'bytes,', width + 'x' + height, ')');