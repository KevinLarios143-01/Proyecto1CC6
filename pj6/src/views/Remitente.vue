<template>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="card-header" style="text-align: center;">
          <h1>Remitente</h1>
        </div>
        <div class="card-body">
          <form class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Nombre del Remitente:</label>
              <input type="text" class="form-control" placeholder="Ingrese nombre">
            </div>
            <div class="col-md-6">
              <label class="form-label">Codigo Postal:</label>
              <input type="number" class="form-control" placeholder="Ingrese codigo postal">
            </div>
            <div class="col-md-6">
              <label class="form-label">Telefono</label>
              <input type="number" class="form-control" placeholder="Ingrese telefono">
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

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  }
}
</script>
