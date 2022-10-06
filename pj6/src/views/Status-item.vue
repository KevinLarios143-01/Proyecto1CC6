<template>

</template>
<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Status-itemView",
  components: {},
  data() {
    return {
      courier: "ForzaG",
      orden: "",
      tienda: "",
      formato: "",
      estado: 0,
      nestado: "",
      Datos: [],
    };
  },
  mounted() {
    this.orden = this.$route.query.orden;
    this.tienda = this.$route.query.tienda;
    this.formato = this.$route.query.formato;
    this.obtenerConsulta(this.orden, this.tienda, this.formato);
  },
  methods: {
    obtenerConsulta(ord, tien, forma) {
      let param = {
        nsol: "",
        estad: "",
        nomb: "",
      };
      axios({
        method: "get",
        url: "https://forzag.herokuapp.com/solicitudes/" + ord+"/"+tien,
        responseType: "json",
        data: param,
      }).then((response) => {
        this.Datos = [];
        if (response.status == 200) {
          if (response.data.estatus.length > 0) {
            for (const element of response.data.estatus) {
              this.estado = element.estado;
              this.nestado = element.nombre;
            }
            console.log(this.estado)
            console.log(this.nestado)
          } else {
            this.estado = 0;
            this.nestado = "no existe";
          }

          this.formatearData(forma);
        }
      });
    },
    formatearData(formato) {
      if (formato === "xml" || formato === "XML") {

        let url = "https://reportesvue.herokuapp.com/status_xml.php?courier=" + this.courier + "&orden=" + this.orden+ "&status=" + this.nestado;
        window.location.href = url;

      } else if (formato === "json" || formato === "JSON") {
        let url = "https://reportesvue.herokuapp.com/status_json.php?courier=" + this.courier + "&orden=" + this.orden+ "&status=" + this.nestado;
        window.location.href = url;
      }
    },
  },
  setup() {
    return {};
  },
};
</script>
  
