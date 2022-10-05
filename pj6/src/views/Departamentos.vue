<template>
  <div class="container">
    <div class="card">
      <div class="card-header" style="text-align:center ;">
        <h1>Departamentos</h1>
      </div>
      <div class="card-body">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="listar">
            <button class="nav-link active" id="listar-tab" data-bs-toggle="tab" data-bs-target="#listar" type="button" role="tab" aria-controls="listar" aria-selected="true">Listar</button>
          </li>
          <li class="nav-item" role="agregar">
            <button class="nav-link" id="agregar-tab" data-bs-toggle="tab" data-bs-target="#agregar" type="button" role="tab" aria-controls="agregar" aria-selected="false">Agregar</button>
          </li>
        </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="listar" role="tabpanel" aria-labelledby="listar-tab">
              <table class="table table-bordered table-striped table-sm">
              <thead>
                <tr>
                  <th>Codigo Postal</th>
                  <th>Nombre</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="aDepartamentos.length > 0">
                  <tr v-for="(row, index) in aDepartamentos" :key="`row-${index}`">
                    <td style="text-align:center;" v-text="row.cod_postal"></td>
                    <td style="text-align:center;" v-text="row.nombre"></td>
                  </tr>
                </template>
                <template v-else>
                  <tr>
                    <td colspan="10">No hay filas para mostrar.</td>
                  </tr>
                </template>
              </tbody>
            </table>
            </div>
            <div class="tab-pane fade" id="agregar" role="tabpanel" aria-labelledby="agregar-tab">
                <form class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">Cod_Postal</label>
                    <input type="text" class="form-control" v-model="cod_postal" placeholder="Ingrese código postal">
                  </div>
                  <div class="col-md-6">
                    <label  class="form-label">Nombre</label>
                    <input type="text" class="form-control" v-model="nombre" placeholder="Ingrese departamento">
                  </div>
                  <div class="col-12">
                    <button type="button" class="btn btn-primary" @click="crear()">Guardar</button>
                  </div>
                </form>
            </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {

  },
  data(){
    return{
      nombre: "",
      cod_postal: "",
      aDepartamentos: [],
    } 
  },
  mounted(){
    this.obtenerDepartamentos();
  },
  methods:{
    crear() {
      let param = {
        cod_postal: this.cod_postal,
        nombre: this.nombre
      };
      axios({
        method: "post",
        url: "http://localhost:3000/departamentos",
        responseType: "json",
        data: param,
      }).then((response) => {
        if (response.status == 200) {
          console.log(response.data);
        }
      });
    },
    obtenerDepartamentos(){
      let param = {
        cod_postal: "",
        nombre: ""
      };
      axios({
        method: "get",
        url: "http://localhost:3000/departamentos",
        responseType: "json",
        data: param,
      }).then((response) => {
        this.aDepartamentos = [];
        console.log("si" + response.status);
        console.log("h " + response.data);
        if (response.status == 200) {
          console.log("ss" + response.status);
          console.log("si" + response.data.length);
          for (let i = 0; i < response.data.length; i++) {
            this.aDepartamentos.push({
              label: response.data[i].cod_postal,
              code: response.data[i].nombre
            });
          }
        }
      });
    },
  },
  setup() {


    return {

    };
  },
}

</script>
