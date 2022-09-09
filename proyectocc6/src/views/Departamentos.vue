<template>
  <div class="home">
    <div class="container">

      <div class="card text-center">
        <div class="card-header">
          <HelloWorld msg="Departamentos" />
        </div>
        <div class="card-body">
          <img alt="Vue logo" src="../assets/logo.png" />
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
