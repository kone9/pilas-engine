import Service from "@ember/service";
import { Promise } from "rsvp";

export default Service.extend({
  enElectron: false,
  en_desarrollo: null,

  iniciar() {
    if (window.enElectron) {
      let electron = requireNode("electron");

      this.set("enElectron", true);
      this.set("en_desarrollo", electron.remote.getGlobal("sharedObj").desarrollo);
    }
  },

  abrirInspector() {
    requireNode("electron")
      .remote.getCurrentWindow()
      .toggleDevTools();
  },

  abrir_en_un_navegador(url) {
    const { shell } = requireNode("electron");
    shell.openExternal(url);
  },

  obtener_filtros_de_archivos() {
    return [
      {
        name: "Proyectos de pilas",
        extensions: ["pilas"]
      }
    ];
  },

  abrir_proyecto() {
    let electron = requireNode("electron");
    let filtros = this.obtener_filtros_de_archivos();

    let opciones = {
      title: "Abrir proyecto",
      multiSelections: false,
      filters: filtros
    };

    return new Promise(function(resolve, reject) {
      electron.remote.dialog.showOpenDialog(opciones, paths => {
        if (paths === undefined) {
          return reject("No ha seleccionado archivo");
        }
        resolve(paths[0]);
      });
    });
  },

  guardar_proyecto(nombre) {
    let electron = requireNode("electron");
    let filtros = this.obtener_filtros_de_archivos();

    nombre = nombre || "*/mi_proyecto.pilas";

    let opciones = {
      title: "Guardar proyecto",
      createDirectory: true,
      multiSelections: false,
      defaultPath: nombre,
      filters: filtros
    };

    return new Promise(function(resolve, reject) {
      electron.remote.dialog.showSaveDialog(opciones, ruta => {
        if (ruta === undefined) {
          return reject("No ha seleccionado archivo");
        }
        resolve(ruta);
      });
    });
  }
});
