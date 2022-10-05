<template>
  <div>
    <div class="container">

      <div class="card">
        <div class="card-header" style="text-align: center;">
          <h1>Solicitud</h1>
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
            <div class="col-md-4">
              <label class="form-label">No. Solicitud</label>
              <input type="number" class="form-control">
            </div>
            <div class="col-md-4">
              <label class="form-label">Fecha de recolección</label>
              <input type="date" class="form-control">
            </div>
            <div class="col-md-4">
              <label class="form-label">Cantidad</label>
              <input type="number" class="form-control">
            </div>
            <div class="col-md-3">
              <label class="form-label">Orden</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-3">
              <label class="form-label">Peso</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">Status</label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
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

  },
  setup() {

    return {

    };
  },
}

</script>
