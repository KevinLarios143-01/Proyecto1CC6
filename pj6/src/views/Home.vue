<template>
  <vueper-slides fade :touchable="false">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :title="slide.title"
    :content="slide.content" />
</vueper-slides>

</template>

<script>
// @ is an alias to /src
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'HomeView',
  components: { VueperSlides, VueperSlide },
  data(){
    return{
      slides: [
        {
          image: require('../assets/tienda.jpg')
        },
        {
          image: require('../assets/entrega.jpg')
        },
        {
          image: require('../assets/entrega.png')
        },
        {
          image: require('../assets/forza.jpg')
        },
        // Other slides.
      ]
    }
  }
}
</script>
