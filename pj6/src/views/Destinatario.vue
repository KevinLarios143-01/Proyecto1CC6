<template>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="card-header" style="text-align: center;">
          <h1>Destinatario</h1>
        </div>
        <div class="card-body">
          <form class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Nombre del Destinatario:</label>
              <input type="text" class="form-control" placeholder="Ingrese nombre de quien recibe">
            </div>
            <div class="col-md-6">
              <label class="form-label">Email: </label>
              <input type="email" class="form-control" placeholder="Ingrese email">
            </div>
            <div class="col-md-6">
              <label class="form-label">Número de Teléfono:</label>
              <input type="number" class="form-control" placeholder="Ingrese teléfono">
            </div>
            <div class="col-12">
              <button type="button" class="btn btn-primary">Realizar envio</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>



</template>

<script >
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  }
}
</script>
