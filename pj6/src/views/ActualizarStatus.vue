<template>
  <div>
    <div class="container">
      <div class="card">
        <div class="card-header" style="text-align: center;">
         <h1>Actualizar Status</h1>
        </div>
        <div class="card-body">
          <form class="row g-3">
            <div class="col-md-4">
              <label class="form-label">No. Solicitud</label>
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
              <label for="inputState" class="form-label">State</label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="inputZip">
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Sign in</button>
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
