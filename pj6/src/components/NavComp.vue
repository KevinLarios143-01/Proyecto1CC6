<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <a class="navbar-brand" style="font-weight: bold;"> <img src="../assets/logoG.png" class="d-block w-50" alt="..."></a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/departamentos">Departamentos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/solicitud">Solicitud</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/categoria">Categoria</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/estatus">Status</router-link>
                </li>
                 <li class="nav-item">
                    <router-link class="nav-link" to="/precios">Precios</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
            </ul>
        </div>  
    </nav>
</template>

<script>
    export default {
      name: "NavComp"
    }
  </script>
  