<template lang="pl">
  <br/>
    <div v-if="place">
        <!--img v-bind:alt="place.name" v-bind:src="place.photo" style="height:200px;"/-->
        <h2>{{place.name}}</h2>
            <p><strong>Opis: </strong>{{place.description}}</p>
            <p><strong>Miejscowość: </strong>{{place.city}}</p>
            <p><strong>Współrzędne: </strong>{{geoposition}}</p>
            <p v-if="place.costToVisit"><strong>Koszt: </strong>{{place.costToVisit}} zł</p>
            <p v-else>Za darmo!</p>
            <p ><strong>Czas zwiedzania: </strong>{{place.timeToVisit}} minut</p>
            <button @click ="revealWeather()"  class="waves-effect waves-light btn" ><i class="material-icons left">cloud</i>Pogoda</button>
                    
                    <div v-if="place.showWeather">
                        <p>Temperatura: {{(weather.data.main.temp-273).toFixed(2)}}&deg;C</p>
                        <p>Opis: {{weather.data.weather[0].description}}</p>
                        <p>Wiatr: {{weather.data.wind.speed}} km/h</p>
                        <p>Ciśnienie: {{weather.data.main.pressure}} hPa</p>
                        <p style="font-size:10px">Pogoda pochodzi z serwisu <a href="https://openweathermap.org/">https://openweathermap.org/</a></p>
                    </div>   
        <button @click ="place.showComments=!place.showComments"  class="waves-effect waves-light btn">Opinie ({{comments.length}})</button>
        <div v-show="place.showComments">
            <CommentForm :id="placeId"/>
            <CommentList :comments="comments"/>
        </div>
    </div>
    <div v-else>Nie znaleziono miejsca o takim indeksie.</div>
</template>
<script>
import CommentList from "@/components/CommentList.vue";
import CommentForm from "@/components/CommentForm.vue";
import placeService from "@/services/placeService.js";
import axios from 'axios'
export default {
  name: "Place",
  props: {
    placeId: {
      type: String,
      required: true,
    },
  },
  components: { CommentList, CommentForm },
  // emits:['add-comment'],
  data() {
    return {
      place: null,
      showWeather: false,
      showComments: false,
      comments: null,
      weather:null
    };
  },
  created() {
    this.getPlaceById(this.placeId);
    this.getCommentsForPlace(this.placeId);
  },
  methods: {
    async getPlaceById(id) {
      if (id) {
        this.place = await placeService.getPlaceById(id);
      }
    },
    async getCommentsForPlace(id){
      if(id){
        this.comments = await placeService.getCommentsForPlace(id)
      }
    },
    async revealWeather() {
      this.place.showWeather = !this.place.showWeather;
      //let cityName = this.place.city;
      let url = "http://api.openweathermap.org/data/2.5/weather?lat=" + this.place.latitude+"&lon="+this.place.longitude+ "&appid=ce133af21bc2f8dd391c25474fae2b43&lang=pl";
      this.weather = await axios(url)
    },
  },
  computed: {
    geoposition() {
      return this.place.longitude + ", " + this.place.latitude;
    },
  },
};
</script>
<style scoped>
.weather {
  border: 1px dotted blue;
  border-radius: 15%;
  background-color: lightblue;
  width: 100px;
  text-align: center;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
