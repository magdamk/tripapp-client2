<template>
  <div class="home">
  <Places/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Places from "@/components/Places.vue";

export default {
  name: "Home",
  components: {
    Places
  }
}
</script>
