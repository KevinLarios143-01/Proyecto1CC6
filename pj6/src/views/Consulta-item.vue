<template>

</template>
<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Consulta-itemView",
  components: {},
  data() {
    return {
      courier: "ForzaG",
      origen: "",
      destino: "",
      formato: "",
      cobertura: false,
      costo: 0,
      Datos: [],
    };
  },
  mounted() {
    this.destino = this.$route.query.destino;
    this.formato = this.$route.query.formato;
    this.obtenerConsulta(this.destino, this.formato);
  },
  methods: {
    obtenerConsulta(desti, forma) {
      let param = {
        cod_origen: "",
        cod_destino: "",
        precio: "",
      };
      axios({
        method: "get",
        url: "https://forzag.herokuapp.com/precios/" + desti,
        responseType: "json",
        data: param,
      }).then((response) => {
        this.Datos = [];
        if (response.status == 200) {
          if (response.data.estatus.length > 0) {
            this.cobertura = true;
            for (const element of response.data.estatus) {
              this.origen = element.cod_origen;
              this.costo = element.precio;
            }
            console.log(this.origen)
            console.log(this.costo)
            this.Datos.push(this.courier);
            this.Datos.push(this.destino);
            this.Datos.push(this.cobertura);
            this.Datos.push(this.costo);
          } else {
            this.cobertura = false;
            this.costo = 0;
            this.Datos.push(this.courier);
            this.Datos.push(this.destino);
            this.Datos.push(this.cobertura);
            this.Datos.push(this.costo);
          }
        
          this.formatearData(forma);
        }
      });
    },
    formatearData(formato) {
      if (formato === "xml" || formato === "XML") {
         
        let url = "https://reportesvue.herokuapp.com/consulta_xml.php?courier="+this.courier+"&destino="+this.destino+"&cobertura="+this.cobertura+"&costo="+this.costo; 
        window.location.href = url;
        
      } else if (formato === "json" || formato === "JSON") {
        let url = "https://reportesvue.herokuapp.com/consulta_json.php?courier="+this.courier+"&destino="+this.destino+"&cobertura="+this.cobertura+"&costo="+this.costo; 
        window.location.href = url;
      }
    },
  },
  setup() {
    return {};
  },
};
</script>
