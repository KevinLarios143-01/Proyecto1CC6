<template>
  <div>
    <br>
    <br>
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-md-12">
            <div class="card-header" style="text-align: center;">
              <h2 style="color: #62ce5c; font-family: monospace;">Actualizar Status</h2>
            </div>
            <div class="card-body">
              <form class="row g-3">
                <div class="col-md-5 offset-1">
                  <label for="solicitud" style="font-weight:bold">No. Solicitud:</label>
                  <input type="number" v-model="orden" class="form-control">
                </div>
                <div class="col-md-5">
                  <label for="status" style="font-weight:bold">Tipo de Status:</label>
                  <br>
                  <select v-model="sta"
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
                    <option disabled value="">Seleccione un Tipo de Status</option>
                    <option v-for="a in aStatus" v-bind:key="a.code">
                      {{ a.code + ". " + a.label }}
                    </option>
                  </select>
                </div>
                <div class="col-md-4 offset-4">
                  <button type="button" class="btn btn-primary" @click="actualizar()">Actualizar Datos</button>
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
        aStatus: [],
        status: "",
        nuevostatus: [],
        sta: "",
        orden: ""
      }
    },
    mounted(){
      this.obtenerStatus();
    },
    methods:{
      obtenerStatus(){
        this.aStatus = [];
        this.aStatus.push({
          label: "Orden Nueva",
          code: "1"
        });
        this.aStatus.push({
          label: "Surtiéndose",
          code: "2"
        });
        this.aStatus.push({
          label: "Empacándose",
          code: "3"
        });
        this.aStatus.push({
          label: "En Ruta",
          code: "4"
        });
        this.aStatus.push({
          label: "Entregada",
          code: "5"
        });
      },
      actualizar(){
        this.nuevostatus = this.sta.split('.');
        this.status = this.nuevostatus[0];
        let param = {
          estado: this.status,
          orden: this.orden
        };
        axios({
          method: "put",
          url: "https://forzag.herokuapp.com/solicitudes/" + this.orden,
          responseType: "json",
          data: param
        }).then((response) => {
          console.log(this.orden);
          if (response.status == 200) {
            this.$swal.fire({ icon: 'succes',
              title: 'STATUS ACTUALIZADO CON ÉXITO',
            });
          }
        });
      }
    }
  }
</script>
