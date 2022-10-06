<template>
  <div>
    <h1>Envio</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Envio-itemView",
  components: {},
  data() {
    return {
      orden: "",
      destinatario: "",
      origen: "",
      destino: "",
      direccion: "",
      categoria: "",
      tienda: "",
      Datos: [],
    };
  },
  mounted() {
    this.orden = this.$route.query.orden;
    this.destinatario=this.$route.query.destinatario;
    this.destino=this.$route.query.destino;
    this.direccion=this.$route.query.direccion;
    this.tienda = this.$route.query.tienda;
    this.obtenerConsulta();
  },
  methods: {
    obtenerConsulta() {
      let param = {
        no_solicitud: this.orden,
        destinatario: this.destinatario,
        origen: this.origen,
        destino: this.destino,
        direccion: this.direccion,
        categoria: this.categoria,
        tienda: this.tienda,
      };
      axios({
        method: "post",
        url: "https://forzag.herokuapp.com/solicitudes",
        responseType: "json",
        data: param,
      }).then((response) => {
        this.Datos = [];
        if (response.status == 200) {
          console.log("insertado correctamente");
        }
      });
    },
  },
  setup() {
    return {};
  },
};
</script>
    
  