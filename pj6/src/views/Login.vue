<template>
  <div>
    <br>
    <br>
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-md-12">
            <div class="card-header" style="text-align: center;">
              <h2 style="color: #62ce5c; font-family: monospace;">Iniciar Sesión</h2>
            </div>
            <div class="card-body">
              <form class="row g-3">
                <div class="col-md-5 offset-1">
                  <label for="usuario" style="font-weight:bold">Usuario:</label>
                  <input type="text" v-model="usua" class="form-control">
                </div>
                <div class="col-md-5">
                  <label for="password" style="font-weight:bold">Contraseña:</label>
                  <input type="password" v-model="pass" class="form-control">
                </div>
                <div class="col-md-4 offset-4">
                  <button type="button" class="btn btn-primary" @click="login()">Iniciar Sesión</button>
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
        usuario: "",
        password: "",
        usua: "",
        pass: "",
        mensaje: "",
        res : ""
      } 
    },
    mounted(){
    },
    methods:{ 
      obtenerLogin(){
        axios({
          method: "get",
          url: "https://forzag.herokuapp.com/login",
          responseType: "json"
        }).then((response) => {
          if(response.status == 200) {
            this.usuario = "";
            this.password = "";
            for (let i = 0; i < response.data.login.length; i++) {
              this.usuario= response.data.login[i].usuario,
              this.password= response.data.login[i].contraseña
              if(this.usuario == this.usua){
                if(this.password == this.pass){
                  this.$swal.fire({ icon: 'success',
                    title: 'INGRESÓ CON ÉXITO',
                  });
                  this.$router.push('cambiarstatus') 
                  i = response.data.login.length;
                }else{
                  this.$swal.fire({ icon: 'error',
                    title: 'USUARIO O CONTRASEÑA INCORRECTOS',
                  });
                }
              }else{
                this.$swal.fire({ icon: 'error',
                  title: 'USUARIO O CONTRASEÑA INCORRECTOS',
                });
              }
            }
            
          }
        });
      },
      login(){
        this.obtenerLogin();
      }, 
    }
  }
</script>