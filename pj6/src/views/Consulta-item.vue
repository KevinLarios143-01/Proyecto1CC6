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
      origen: "",
      destino: "",
      formato: "",
      cobertura: false,
      costo: 0,
      Datos: [],
      tagintro: "",
      tagfin: "",
      tagcourrier: "",
      tagdestino: "",
      tagcobertura: "",
      tagprecio: "",
      llaves: ' "orden" :',
      jsons: null
    };
  },
  mounted() {
    this.destino = this.$route.query.destino;
    this.formato = this.$route.query.formato;
    this.obtenerConsulta(this.destino);
  },
  methods: {
    obtenerConsulta(desti) {
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
          let url = "https://reportesvue.herokuapp.com/consulta_xml.php?courier="+this.courier+"&destino="+this.destino+"&cobertura="+this.cobertura+"&costo="+this.costo; 
          window.location.href = url;
          //this.formatearData(forma);
        }
      });
    },
    formatearData(formato) {
      if (formato === "xml" || formato === "XML") {
        let count = 0;
        this.tagintro = "<consultaprecio>";
        this.tagfin = "</consultaprecio>";
        for (const element of this.Datos) {
          if (count == 0) {
            this.tagcourrier = "\t<courrier>" + element + "</courrier>";
          } else if (count == 1) {
            this.tagdestino = "\t<destino>" + element + "</destino>";
          } else if (count == 2) {
            this.tagcobertura = "\t<cobertura>" + element + "</cobertura>";
          } else if (count == 3) {
            this.tagprecio = "\t<costo>" + element + "</costo>";
          }
          count++;
        }
      } else if (formato === "json" || formato === "JSON") {
        let count = 0;
        this.tagintro = "{";
        this.tagfin = "}";
        for (const element of this.Datos) {
          if (count == 0) {
            this.tagcourrier = '"courrier" : ' + '"' + element + '",';
          } else if (count == 1) {
            this.tagdestino = '"destino" : ' + '"' + element + '",';
          } else if (count == 2) {
            this.tagcobertura = '"cobertura" : ' + '"' + element + '",';
          } else if (count == 3) {
            this.tagprecio = '"costo" : ' + '"' + element + '"';
          }
          count++;
        }
      }
    },
  },
  setup() {
    return {};
  },
};
</script>
