// Synthetic Web Audio API Laboratory Atmospheric Soundscape
// Generates deep ambient drone and gentle chemical bubbling sounds natively.

class LabAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.bubbleInterval = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    this.ctx = new AudioContext();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.isPlaying) return;
    this.isPlaying = true;

    // 1. Low Lab Ambient Hum / Drone (55Hz and 110Hz harmonics)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const droneGain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(110.5, this.ctx.currentTime); // Slight detune

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, this.ctx.currentTime);

    droneGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(droneGain);
    droneGain.connect(this.masterGain);

    osc1.start();
    osc2.start();

    this.droneNodes = [osc1, osc2, droneGain, filter];

    // 2. Periodic gentle chemical bubble sound
    this.scheduleBubbles();
  }

  scheduleBubbles() {
    if (!this.isPlaying) return;

    const playBubble = () => {
      if (!this.isPlaying || !this.ctx) return;

      try {
        const now = this.ctx.currentTime;
        const bubbleOsc = this.ctx.createOscillator();
        const bubbleGain = this.ctx.createGain();

        // Frequency sweep up (classic water/chemical bubble pop)
        const startFreq = 280 + Math.random() * 220;
        const endFreq = startFreq + 150 + Math.random() * 100;

        bubbleOsc.type = 'sine';
        bubbleOsc.frequency.setValueAtTime(startFreq, now);
        bubbleOsc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.08);

        bubbleGain.gain.setValueAtTime(0.0001, now);
        bubbleGain.gain.linearRampToValueAtTime(0.05, now + 0.02);
        bubbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

        bubbleOsc.connect(bubbleGain);
        bubbleGain.connect(this.masterGain);

        bubbleOsc.start(now);
        bubbleOsc.stop(now + 0.09);
      } catch (e) {
        // Safe catch for audio scheduling
      }

      // Next bubble randomized between 400ms to 1800ms
      const nextTime = 400 + Math.random() * 1400;
      this.bubbleTimeout = setTimeout(playBubble, nextTime);
    };

    playBubble();
  }

  stop() {
    this.isPlaying = false;
    if (this.bubbleTimeout) {
      clearTimeout(this.bubbleTimeout);
    }
    if (this.droneNodes) {
      this.droneNodes.forEach(node => {
        try {
          if (node.stop) node.stop();
          if (node.disconnect) node.disconnect();
        } catch (e) {}
      });
      this.droneNodes = null;
    }
    if (this.ctx && this.ctx.state === 'running') {
      this.ctx.suspend();
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const labAudio = new LabAudioEngine();

