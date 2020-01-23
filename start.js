const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext

var volume = audioCtx.createGain();
volume.connect(audioCtx.destination);

var sine = audioCtx.createOscillator()
sine.frequency.value=440;
sine.type="sine"
sine.start()
sine.connect(volume);
var sineb = audioCtx.createOscillator()
sineb.frequency.value=523.25;
sineb.type="sine"
sineb.start()
sineb.connect(volume);
var sinec = audioCtx.createOscillator();
sinec.frequency.value = 698.46;
sinec.type = "sine";
sinec.start();
sinec.connect(volume);
volume.gain.value=0.2
