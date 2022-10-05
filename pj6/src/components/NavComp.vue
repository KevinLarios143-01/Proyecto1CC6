<template >
    <nav class="navbar navbar-expand-lg bg-light" v-if="!['consulta-item','envio-item', 'status-item'].includes($route.name)" >
        <div class="container">
            <a class="navbar-brand" style="font-weight: bold;">Forza G</a>
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
                    <router-link class="nav-link" to="/destinatario">Destinatario</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/remitente">Remitente</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/estatus">Estatus</router-link>
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
  