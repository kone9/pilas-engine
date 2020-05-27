import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  actions: {
    cambiarModo(modo) {
      this.set("modoZoom", modo);
    }
  }
});
