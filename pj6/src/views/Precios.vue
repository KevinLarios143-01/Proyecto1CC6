<template>
  <br>
  <br>
  <div class="container">
    <div class="card">
      <div class="row">
        <div class="col-md-12">
          <div class="card-header" style="text-align:center ;">
            <h2 style="color: #62ce5c; font-family: monospace;">Precios</h2>
          </div>
          <div class="card-body">
            <form class="row g-3">
              <div class="col-md-5 offset-1">
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
                <div class="col-md-5">
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
                <div class="col-md-5 offset-1">
                  <label for="remitente" style="font-weight:bold">Precio</label>
                  <input type="number" class="form-control" v-model="precio" placeholder="Ingrese nombre">
                </div>
            </form>
            <br>
            <div class="row">
                <div class="col-md-4 offset-4">
                <button type="button" class="btn btn-primary" @click="guardar()">Guardar Precio</button>
              </div>
            </div>
            <br>
            <div class="col-md-10 offset-1">
              <table class="table table-bordered table-sm table-hover mb-0 table table-striped">
                <thead class="table-dark">
                  <tr>
                    <th style="text-align:center; font-weight:bold">Origen</th>
                    <th style="text-align:center; font-weight:bold">Destino</th>
                    <th style="text-align:center; font-weight:bold">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="aPrecios.length > 0">
                    <tr v-for="(row, index) in aPrecios" :key="`row-${index}`">
                      <td style="text-align:center;" v-text="row.label"></td>
                      <td style="text-align:center;" v-text="row.code"></td>
                      <td style="text-align:center;" v-text="row.precio"></td>
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
            aPrecios: [],
            aDepartamentos: [],
            cod_origen: "",
            cod_destino: "",
            nuevodes: [], 
            nuevore: [],
            re: "",
            des: "",
            precio: ""
        } 
        },
        mounted(){
            this.obtenerDepartamentos();
            this.obtenerPrecios();
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
        obtenerPrecios(){
            axios({
                method: "get",
                url: "https://forzag.herokuapp.com/precios",
                responseType: "json"
            }).then((response) => {
                this.aPrecios = [];
                if(response.status == 200) {
                    for (let i = 0; i < response.data.estatus.length; i++) {
                        this.aPrecios.push({
                            label: response.data.estatus[i].cod_origen,
                            code: response.data.estatus[i].cod_destino,
                            precio: response.data.estatus[i].precio
                        });
                    }
                }
            });
        },
        guardar() {
            this.nuevodes = this.des.split('-');
            this.cod_destino= this.nuevodes[0];

            this.nuevore = this.re.split('-');
            this.cod_origen = this.nuevore[0];
      
            let param = {
                cod_origen: this.cod_origen,
                cod_destino: this.cod_destino,
                precio: this.precio
            };
            axios({
                method: "post",
                url: "https://forzag.herokuapp.com/precios",
                responseType: "json",
                data: param,
            }).then((response) => {
              if (response.status == 200) {
                this.$swal.fire({ icon: 'succes',
                  title: 'PRECIO AGREGADO CON ÉXITO',
                });
              }else{
                this.$swal.fire({ icon: 'error',
                  title: 'ERROR AL INSERTAR PRECIO',
                });
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