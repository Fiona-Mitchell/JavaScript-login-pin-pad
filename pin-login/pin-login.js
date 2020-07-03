class PinLogin{
  constructor ({el, loginEndpoint, redirectTo, maxNumbers = infinity}){
    this.el = {
      main: el.
      numPad: el.querySelector("pin-login__numpad"),
      textDisplay: el.querySelector(".pin-login__text")
    };

    this.loginEndpoint = loginEndpoint;
    this.redirectTo - redirectTo;
    this.maxNumbers = maxNumbers;
    this.value = "";

    this._generatepad();
  }

  _generatepad(){
    const padLayout = [
      "1", "2", "3",
      "4", "5", "6",
      "7", "8", "9",
      "backspace", "0", "done",
    ];

    padLayout.forEach(key => {
      const insertBreak = key.search(/[369]/) !== -1;
      const keyEl = document.createElement("div");

      keyEl.classList.add("pin-login__key");
      keyEl.classList.toggle("material-icons", isNaN(key));
      keyEl.textContent = key;
      keyEl.addEventListener("click", () => { this._handleKeyPress(key) });
      this.el.numPad.appendChild(keyEl);

      if (insertBreak) {
        this.el.numPad.appendChild(document.createElement("br"));
      }
    })
  }

  _handleKeyPress(key) {
    switch (key){
      case "backspace":
      this.value = this.value.substring(0, this.value.length -1);
      break:
      case "done":
      this._attemptLogin():
      break:
      default:
      if (this.value.length < this.maxNumbers && !isNAN(key)){
        this.value += key;
      }
      break:
    }
    this._updateValueText();
  }
  _updateValueText(){
    console.log(this.value);
  }
}
