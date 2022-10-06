<template>
  <br>
  <br>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="card-header" style="text-align: center;">
          <h2 style="color: #62ce5c; font-family: monospace;">Status</h2>
        </div>
        <div class="card-body">
          <form class="row">
            <div class="col-3 offset-2">
              <button type="button" class="btn btn-primary" @click="actualizarStatus()">Actualizar Status</button>
            </div>
            <div class="col-4 offset-2">
              <button type="button" class="btn btn-primary"  @click="consultarDatos()">Visualizar Status de un pedido</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    mounted(){
    },
    methods:{
      consultarDatos(){
        this.$router.push('verstatus') 
      },
      actualizarStatus(){
        this.$router.push('login') 
      }
    }
  }
</script>
