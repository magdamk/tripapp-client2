/* eslint-disable prettier/prettier */
<template lang="pl">
    <p v-show="!photos.length">Brak zdjęć</p>
    <div v-for="photo in photos" v-bind:key="photo._id">
        <img src="photo.url" style="height:200px;"/>
    </div>
</template>
<script>
/* eslint-disable prettier/prettier */
export default {
  name: "Photos",
  props: {
    photos: {
      type: Array,
      required: true,
    }
  }
  }
</script>
<style scooped></style>
