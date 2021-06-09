<template>
  <div class="home">
  <img v-bind:alt="name" v-bind:src="photo" style="height:200px;"/>
    <h2>{{name}}</h2>
    <div>
      <p><strong>Opis: </strong>{{description}}</p>
      <p><strong>Współrzędne: </strong>{{geoposition}}</p>
      <p v-if="costToVisit"><strong>Koszt: </strong>{{costToVisit}} zł</p>
      <p v-else>Za darmo!</p>
      <button v-on:click="revealWeather()">Pogoda</button>
      <p v-if="showWeather">Słonecznie</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      name: "Zamek Królewski w Warszawie",
      photo:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lBmk_8fsyQsS7d7rBZkKcgHaET%26pid%3DApi&f=1",
      description: "Zamek Królewski w Warszawie – barokowo-klasycystyczny zamek królewski znajdujący się w Warszawie przy placu Zamkowym 4.",
      costToVisit: 30,
      longitude: 52.247778,
      latitude: 21.01416,
      showWeather: false
    };
  },
  computed: {
    geoposition(){
      return this.longitude + ', ' + this.latitude;
    }},
    methods:{
      revealWeather(){
        this.showWeather = !this.showWeather;
      }
},
  components: {}
}
</script>
