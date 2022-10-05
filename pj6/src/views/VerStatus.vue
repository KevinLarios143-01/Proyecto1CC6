<template>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="card-header" style="text-align: center;">
          <h1>Status</h1> 
        </div>
        <div class="card-body">
          <div class="progress" v-if="ejemplo == 0">
            <div class="progress-bar progress-bar-striped" role="progressbar" aria-label="Default striped example" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress" v-if="ejemplo == 1">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" aria-label="Success striped example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress" v-if="ejemplo == 2">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" aria-label="Info striped example" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress" v-if="ejemplo == 3">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-label="Warning striped example" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress" v-if="ejemplo == 4">
            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-label="Danger striped example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  },
  data(){
    return{
      ejemplo: 4
    }
  },
}
</script>
