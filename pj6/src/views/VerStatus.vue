<template>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-md-12">
            <div class="card-header" style="text-align: center;">
              <h2 style="color: #62ce5c; font-family: monospace;">Ver Status del Pedido</h2>
            </div>
            <div class="card-body">
              <div class="col-md-4 offset-1">
                <label for="solicitud" style="font-weight:bold">No. Solicitud:</label>
                <input type="number" v-model="orden" class="form-control">
                <br>
              </div>
              <div class="col-md-4 offset-4">
                <button type="button" class="btn btn-primary" @click="ver()">Visualizar Estado</button>
              </div>
              <br>
              <div class="col-md-10 offset-1">
                <div class="progress" v-if="ejemplo == 1">
                  <div class="progress-bar progress-bar-striped  progress-bar-animated" role="progressbar" aria-label="Default striped example" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  <strong style="font-size: 13px; color: black">Orden Nueva</strong>
                </div>
                <div class="progress" v-if="ejemplo == 2">
                  <div class="progress-bar progress-bar-striped  progress-bar-animated bg-success" role="progressbar" aria-label="Success striped example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  <strong style="font-size: 13px; color: black">Surtiéndose</strong>
                </div>
                <div class="progress" v-if="ejemplo == 3">
                  <div class="progress-bar progress-bar-striped  progress-bar-animated bg-info" role="progressbar" aria-label="Info striped example" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  <strong style="font-size: 13px; color: black">Empacándose</strong>
                </div>
                <div class="progress" v-if="ejemplo == 4">
                  <div class="progress-bar progress-bar-striped  progress-bar-animated bg-warning" role="progressbar" aria-label="Warning striped example" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  <strong style="font-size: 13px; color: black">En Ruta</strong>
                </div>
                <div class="progress" v-if="ejemplo == 5">
                  <div class="progress-bar progress-bar-striped  progress-bar-animated bg-danger" role="progressbar" aria-label="Danger striped example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  <strong style="font-size: 13px; color: black">Entregada</strong>
                </div>
              </div>
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
      ejemplo: 0,
      orden: ""
    }
  },
  methods:{
    ver(){
      let param = {
        orden: this.orden
      };
      axios({
        method: "get",
        url: "https://forzag.herokuapp.com/solicitudes/" + this.orden,
        responseType: "json",
        data: param
      }).then((response) => {
        if (response.status == 200) {
          console.log(response.data);
          this.ejemplo = response.data.estatus[0].estado;
          
        }
      });
    }
  }
}
</script>
