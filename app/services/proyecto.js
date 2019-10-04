import Service from "@ember/service";

export default Service.extend({
  vincular(proyecto) {
    this.set("proyecto", proyecto);
  },

  obtener_nombres_de_actores() {
    return this.obtener_todos_los_actores().map(a => a.nombre);
  },

  obtener_nombres_de_todas_las_escenas() {
    return this.obtener_todas_las_escenas().map(a => a.nombre);
  },

  renombrar_actor(nombre, nombre_nuevo) {
    let actor = this.buscar_actor_por_nombre(nombre);
    actor.set("nombre", nombre_nuevo);

    let codigo = this.obtener_codigo_de_actor_por_nombre(nombre);

    codigo.set("nombre", nombre_nuevo);
    let codigo_nuevo = codigo.get("codigo").replace(`class ${nombre}`, `class ${nombre_nuevo}`);
    codigo.set("codigo", codigo_nuevo);

    return actor;
  },

  renombrar_escena(nombre, nombre_nuevo) {
    let escena = this.buscar_escena_por_nombre(nombre);
    escena.set("nombre", nombre_nuevo);

    let codigo = this.obtener_codigo_de_escena_por_nombre(nombre);

    codigo.set("nombre", nombre_nuevo);
    let codigo_nuevo = codigo.get("codigo").replace(`class ${nombre}`, `class ${nombre_nuevo}`);
    codigo.set("codigo", codigo_nuevo);

    return escena;
  },

  obtener_codigo_de_actor_por_nombre(nombre) {
    return this.proyecto.codigos.actores.filter(c => c.nombre === nombre)[0];
  },

  obtener_codigo_de_escena_por_nombre(nombre) {
    return this.proyecto.codigos.escenas.filter(c => c.nombre === nombre)[0];
  },

  buscar_actor_por_nombre(nombre) {
    let actores = this.obtener_todos_los_actores();
    return actores.filter(a => a.nombre === nombre)[0];
  },

  buscar_escena_por_nombre(nombre) {
    let escenas = this.obtener_todas_las_escenas();
    return escenas.filter(a => a.nombre === nombre)[0];
  },

  obtener_todos_los_actores() {
    return this.proyecto.escenas.map(e => e.actores).reduce((a, b) => a.concat(b));
  },

  obtener_todas_las_escenas() {
    return this.proyecto.escenas;
  }
});
