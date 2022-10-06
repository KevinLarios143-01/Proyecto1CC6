<template>
  <div>
    <br>
    <br>
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-md-12">
            <div class="card-header" style="text-align: center;">
              <h2 style="color: #62ce5c; font-family: monospace;">Solicitud</h2>
            </div>
            <div class="card-body">
              <form class="row g-3">
                <div class="col-md-3 offset-1">
                  <label for="solicitud" style="font-weight:bold">No. Solicitud:</label>
                  <input type="text" v-model="no_solicitud" class="form-control" placeholder="Ingrese número de solicitud">
                </div>
                <div class="col-md-3">
                  <label for="origen" style="font-weight:bold">Departamento de Origen:</label>
                  <br>
                  <select v-model="re" 
                          style="    
                            display: block;
                            width: 100%;
                            padding: 0.375rem 0.75rem;
                            font-size: 1rem;
                            font-weight: 400;
                            line-height: 1.5;
                            color: #212529;
                            background-color: #fff;
                            background-clip: padding-box;
                            border: 1px solid #ced4da;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                            border-radius: 0.375rem;
                            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;">
                    <option disabled value="">Seleccione un Departamento</option>
                    <option v-for="a in aDepartamentos" v-bind:key="a.code">
                      {{ a.label + "-" + a.code }}
                    </option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="destino" style="font-weight:bold">Departamento de Destino:</label>
                  <br>
                  <select v-model="des" 
                          style="    
                            display: block;
                            width: 100%;
                            padding: 0.375rem 0.75rem;
                            font-size: 1rem;
                            font-weight: 400;
                            line-height: 1.5;
                            color: #212529;
                            background-color: #fff;
                            background-clip: padding-box;
                            border: 1px solid #ced4da;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                            border-radius: 0.375rem;
                            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;">
                    <option disabled value="">Seleccione un Departamento</option>
                    <option v-for="a in aDepartamentos" v-bind:key="a.code" >
                      {{ a.label + "-" + a.code }}
                    </option>
                  </select>
                </div>
                <div class="col-md-3 offset-1">
                  <label for="destinatario" style="font-weight:bold">Nombre del Destinatario:</label>
                  <input type="text" v-model="destinatario" class="form-control" placeholder="Ingrese nombre de quien recibe">
                </div>
                <div class="col-md-3">
                  <label for="remitente" style="font-weight:bold">Nombre del Remitente</label>
                  <input type="text" class="form-control" v-model="remitente" placeholder="Ingrese nombre">
                </div>
                <div class="col-md-3">
                  <label for="direccion" style="font-weight:bold">Dirección:</label>
                  <input type="text" v-model="direccion" class="form-control" placeholder="Ingrese una dirección">
                </div>
                <div class="col-md-3 offset-1">
                  <label for="categoria" style="font-weight:bold">Categoría:</label>
                  <br>
                  <select v-model="ca"
                          style="
                            display: block;
                            width: 100%;
                            padding: 0.375rem 0.75rem;
                            font-size: 1rem;
                            font-weight: 400;
                            line-height: 1.5;
                            color: #212529;
                            background-color: #fff;
                            background-clip: padding-box;
                            border: 1px solid #ced4da;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                            border-radius: 0.375rem;
                            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;">
                    <option disabled value="">Seleccione una Categoría</option>
                    <option v-for="a in aCategoria" v-bind:key="a.code">
                      {{ a.code + ". " + a.label }}
                    </option>
                  </select>
                </div>
                <div class="row">
                  <div class="col-md-4 offset-4">
                    <button type="button" class="btn btn-primary" @click="guardar()">Realizar envio</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      aCategoria: [],
      aDepartamentos: [],
      no_solicitud: "",
      destinatario: "",
      origen: "",
      destino: "",
      direccion: "",
      tienda: "",
      categoria: "",
      nuevodes: [], 
      nuevore: [],
      re: "",
      des: "",
      nuevoc: [],
      ca: ""
    } 
  },
  mounted(){
    this.obtenerCategoria();
    this.obtenerDepartamentos();
  },
  methods:{
    obtenerCategoria(){
      this.aCategoria = [];
      this.aCategoria.push({
        label: "Sobre",
        code: "1"
      });
      this.aCategoria.push({
        label: "Paquete",
        code: "2"
      });
    },
    obtenerDepartamentos(){
      axios({
        method: "get",
        url: "https://forzag.herokuapp.com/departamentos",
        responseType: "json"
      }).then((response) => {
        this.aDepartamentos = [];
        if (response.status == 200) {
          for (let i = 0; i < response.data.estatus.length; i++) {
            this.aDepartamentos.push({
              label: response.data.estatus[i].cod_postal,
              code: response.data.estatus[i].nombre
            });
          }
        }
      });
    },
    guardar() {
      this.nuevodes = this.des.split('-');
      this.destino= this.nuevodes[0];

      this.nuevore = this.re.split('-');
      this.origen = this.nuevore[0];

      this.nuevoc = this.ca.split('.');
      this.categoria = this.nuevoc[0];
      
      let param = {
        no_solicitud: this.no_solicitud,
        destinatario: this.destinatario,
        origen: this.origen,
        destino: this.destino,
        categoria: this.categoria,
        direccion: this.direccion,
        tienda: this.remitente,
      };
      axios({
        method: "post",
        url: "https://forzag.herokuapp.com/solicitudes",
        responseType: "json",
        data: param,
      }).then((response) => {
        if (response.status == 200) {
          this.$swal.fire({ icon: 'succes',
            title: 'SOLICITUD AGREGADA CON ÉXITO',
          });
        }else{
          this.$swal.fire({ icon: 'error',
            title: 'ERROR AL INSERTAR SOLICITUD',
          });
        }
      });
    },
  },
}
</script>
