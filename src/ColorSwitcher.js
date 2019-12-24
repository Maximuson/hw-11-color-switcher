class ColorSwitcher {
  constructor(colors, refs) {
    this.active = false;
    this.colors = colors;
    this.refs = { ...refs };
    this._initButtons();
    this.timer = undefined;
  }
  _setRandomBGC(element, colors) {
    const randomNumber = this._randomIntegerFromInterval(0, colors.length);
    element.style.backgroundColor = colors[randomNumber];
  }

  _randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  _initButtons() {
    this.refs.buttons.addEventListener('click', e => {
      if (!e.target.classList.contains('button')) {
        return undefined;
      }
      if (e.target.dataset.action === 'start') {
        !this.active && this.start();
      }
      if (e.target.dataset.action === 'stop') {
        this.stop();
      }
    });
  }

  start() {
    this.active = true;
    this.refs.start.setAttribute('disabled', 'true');
    this.timer = setInterval(() => {
      this._setRandomBGC(this.refs.wrapper, this.colors, 1000);
    }, 1000);
  }
  stop() {
    this.active = false;
    this.refs.start.removeAttribute('disabled');
    clearInterval(this.timer);
  }
}
export default ColorSwitcher;
