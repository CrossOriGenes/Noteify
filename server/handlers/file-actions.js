const fs = require('node:fs/promises');

async function readData(){
    const data = await fs.readFile('stickynotes.json', 'utf-8');
    return JSON.parse(data);
}

async function writeData(data){
    await fs.writeFile('stickynotes.json', JSON.stringify(data));
}

exports.writeData = writeData;
exports.readData = readData;