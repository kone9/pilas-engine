class Control {
  pilas: Pilas;

  _izquierda;
  _derecha;
  _arriba;
  _abajo;
  _espacio;

  constructor(pilas: Pilas) {
    const codigos = Phaser.Input.Keyboard.KeyCodes;
    this.pilas = pilas;
    let keyboard = pilas.game.input["keyboard"];

    this._izquierda = keyboard.addKey(codigos.LEFT);
    this._derecha = keyboard.addKey(codigos.RIGHT);
    this._arriba = keyboard.addKey(codigos.UP);
    this._abajo = keyboard.addKey(codigos.DOWN);
    this._espacio = keyboard.addKey(codigos.SPACE);
  }

  get izquierda() {
    return this._izquierda.isDown;
  }

  set izquierda(v) {
    this.pilas.utilidades.acceso_incorrecto(v);
  }

  get derecha() {
    return this._derecha.isDown;
  }

  set derecha(v) {
    this.pilas.utilidades.acceso_incorrecto(v);
  }

  get arriba() {
    return this._arriba.isDown;
  }

  set arriba(v) {
    this.pilas.utilidades.acceso_incorrecto(v);
  }

  get abajo() {
    return this._abajo.isDown;
  }

  set abajo(v) {
    this.pilas.utilidades.acceso_incorrecto(v);
  }

  get espacio() {
    return this._espacio.isDown;
  }

  set espacio(v) {
    this.pilas.utilidades.acceso_incorrecto(v);
  }
}
