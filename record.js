const recorder = require('node-record-lpcm16')
const fs = require('fs')

let name = Date.now();

const file = fs.createWriteStream("recordings/" + name + '.wav', { encoding: 'binary' })

recorder.record({
  sampleRate: 44100
})
.stream()
.pipe(file)