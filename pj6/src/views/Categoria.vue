<template>
  <div class="home">
    <div class="container">

      <div class="card">
        <div class="card-header" style="text-align: center;">
          <h1>Categoria</h1>
        </div>
        <div class="card-body">

          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">Listar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Agregar</a>
            </li>
          </ul>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <form class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Cod_Categoria</label>
              <input type="text" class="form-control" placeholder="Ingrese código de categoría">
            </div>
            <div class="col-md-6">
              <label class="form-label">Nombre</label>
              <input type="password" class="form-control" placeholder="Ingrese Categoría">
            </div>
            <div class="col-12">
              <label class="form-label">Precio</label>
              <input type="number" class="form-control" placeholder="Ingrese precio">
            </div>

            <div class="col-12">
              <button type="button" class="btn btn-primary">Guardar</button>
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
