/* eslint-disable prettier/prettier */
<template lang="pl">
    <div>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Miejsce</th>
                    <th>Akcja</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="place in places" v-bind:key="place._id">
                    <td><!-- <img v-bind:alt="place.name" v-bind:src="place.photo" style="height:100px;"/---></td>
                    <td @click="goToPlace(place._id)">{{place.name}}</td>
                    <td>
                        <button @click="goToPlace(place._id)" class="waves-effect waves-light btn-small">Pokaż</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import placeService from "@/services/placeService.js";
export default {
  name: "Places",
  components: {},
  data() {
    return {
      places: [],
    };
  },
  created() {
    this.getAllPlaces();
  },
  methods: {
    async getAllPlaces() {
      this.places = await placeService.getAllPlaces();
    },
    goToPlace(id) {

      this.$router.push("/places/" + id);
    },
  },
};
</script>
<style scoped></style>
