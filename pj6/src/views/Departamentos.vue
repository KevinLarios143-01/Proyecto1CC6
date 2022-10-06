<template>
  <br>
  <br>
  <div class="container">
    <div class="card">
      <div class="row">
        <div class="col-md-12">
          <div class="card-header" style="text-align:center ;">
            <h2 style="color: #62ce5c; font-family: monospace;">Departamentos</h2>
          </div>
          <div class="card-body">
            <form class="row g-3">
              <div class="col-md-5 offset-1">
                <label for="postal" style="font-weight:bold">Código Postal:</label>
                <input type="text" class="form-control" v-model="cod_postal" placeholder="Ingrese código postal">
              </div>
              <div class="col-md-5">
                <label for="nombre" style="font-weight:bold">Nombre del Departamento:</label>
                <input type="text" class="form-control" v-model="nombre" placeholder="Ingrese departamento">
              </div>
              <div class="col-md-4 offset-4">
                <button type="button" class="btn btn-primary" align="center" @click="crear()">Guardar Departamento</button>
              </div>
            </form>
            <br>
            <div class="col-md-10 offset-1">
              <table class="table table-bordered table-sm table-hover mb-0 table table-striped">
                <thead class="table-dark">
                  <tr>
                    <th style="text-align:center; font-weight:bold">Codigo Postal</th>
                    <th style="text-align:center; font-weight:bold">Nombre</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="aDepartamentos.length > 0">
                    <tr v-for="(row, index) in aDepartamentos" :key="`row-${index}`">
                      <td style="text-align:center;" v-text="row.label"></td>
                      <td style="text-align:center;" v-text="row.code"></td>
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
          url: "https://forzag.herokuapp.com/departamentos",
          responseType: "json",
          data: param,
        }).then((response) => {
          if (response.status == 200) {
            this.$swal.fire({ icon: 'succes',
              title: 'DEPARTAMENTO AGREGADO CON ÉXITO',
            });
          }else{
            this.$swal.fire({ icon: 'error',
              title: 'ERROR AL INSERTAR DEPARTAMENTO',
            });
          }
        });
      },
      obtenerDepartamentos(){
        axios({
          method: "get",
          url: "https://forzag.herokuapp.com/departamentos",
          responseType: "json"
        }).then((response) => {
          this.aDepartamentos = [];
          if(response.status == 200) {
            for (let i = 0; i < response.data.estatus.length; i++) {
              this.aDepartamentos.push({
                label: response.data.estatus[i].cod_postal,
                code: response.data.estatus[i].nombre
              });
            }
          }
        });
      },
    },
  }
</script>

<style>
  .table-striped tbody tr:nth-of-type(odd){
    background-color: #d9edf7 !important;
  }
  .table-hover tbody tr:hover {
    background-color: #f7f7f7 !important;
  }
</style>