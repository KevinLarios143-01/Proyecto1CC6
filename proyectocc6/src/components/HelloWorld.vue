<template>
  <div>
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  data(){
    return{

    };
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

