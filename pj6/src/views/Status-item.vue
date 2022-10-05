<template>
  <div>
    {{$route.params.id}}
    &lt;orden&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;courrier&gt;ForzaG&lt;/courrier&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;orden&gt;1&lt;/orden&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;status&gt;En ruta&lt;/status&gt;<br>
    &lt;/orden&gt;
  </div>
</template>
<script>
  // @ is an alias to /src
  import axios from 'axios';
  
  export default {
    name: 'Status-itemView',
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
      this.obtenerConsulta();
    },
    methods:{
      obtenerConsulta(){
        let param = {
          cod_postal: "",
          nombre: ""
        };
        axios({
          method: "get",
          url: "http://localhost:3000/precios",
          responseType: "json",
          data: param,
        }).then((response) => {
          this.aDepartamentos = [];
          console.log("si" + response.status);
          console.log("h " + response.data);
          if (response.status == 200) {
            console.log("ss" + response.status);
            console.log("si" + response.data.length);
            for (const element of response.data) {
              this.aDepartamentos.push({
                label: element.cod_postal,
                code: element.nombre
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
  
