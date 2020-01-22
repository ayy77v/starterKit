const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext

var sine = audioCtx.createOscillator()
sine.start()
sine.connect(audioCtx.destination);