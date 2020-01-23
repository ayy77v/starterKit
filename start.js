const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext

var sine = audioCtx.createOscillator()
sine.frequency.value=440;
sine.type="sine"
sine.start()
sine.connect(audioCtx.destination);
var sineb = audioCtx.createOscillator()
sineb.frequency.value=523.25;
sineb.type="sine"
sineb.start()
sineb.connect(audioCtx.destination);
var sinec = audioCtx.createOscillator();
sinec.frequency.value = 698.46;
sinec.type = "sine";
sinec.start();
sinec.connect(audioCtx.destination);
