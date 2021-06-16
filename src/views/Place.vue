<template lang="pl">
  <br/>
    <div v-if="place">
        <img v-bind:alt="'photo of '+ place.name" v-bind:src="place.photoMain" style="height:200px;"/>
        <h2>{{place.name}}</h2>
            <p><strong>Opis: </strong>{{place.description}}</p>
            <p><strong>Miejscowość: </strong>{{place.city}}</p>
            <p><strong>Współrzędne: </strong>{{geoposition}}</p>
            <p v-if="place.costToVisit"><strong>Koszt: </strong>{{place.costToVisit}} zł</p>
            <p v-else>Za darmo!</p>
            <p ><strong>Czas zwiedzania: </strong>{{place.timeToVisit}} minut</p>
            <p>Średnia ocen: {{average}}</p>
            <button @click ="revealWeather()"  class="waves-effect waves-light btn" ><i class="material-icons left">wb_sunny</i>Pogoda</button>
                    <div v-if="place.showWeather">
                      <table class="responsive-table" >
                        <thead >
                          <tr>
                            <td></td>
                            <td><h5>Teraz</h5></td>
                            <td><h5>Jutro</h5></td>
                            <td><h5>Pojutrze</h5></td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Temperatura:</td>
                            <td>{{(weather.data.current.temp-273).toFixed(2)}}&deg;C</td>
                            <td>{{(weather.data.daily[0].temp.day-273).toFixed(2)}}&deg;C</td>
                            <td>{{(weather.data.daily[1].temp.day-273).toFixed(2)}}&deg;C</td>
                          </tr>
                          <tr>
                            <td>Opis: </td>
                            <td>{{weather.data.current.weather[0].description}}</td>
                            <td>{{weather.data.daily[0].weather[0].description}}</td>
                            <td>{{weather.data.daily[1].weather[0].description}}</td>
                          </tr>
                          <tr>
                            <td>Wiatr: </td>
                            <td>{{weather.data.current.wind_speed}} km/h</td>
                            <td>{{weather.data.daily[0].wind_speed}} km/h</td>
                            <td>{{weather.data.daily[1].wind_speed}} km/h</td>
                          </tr>
                          <tr>
                            <td>Ciśnienie: </td>
                            <td>{{weather.data.current.pressure}} hPa</td>
                            <td>{{weather.data.daily[0].pressure}} hPa</td>
                            <td>{{weather.data.daily[1].pressure}} hPa</td>
                          </tr>
                        </tbody>
                      </table>
                        <p style="font-size:10px">Pogoda pochodzi z serwisu <a href="https://openweathermap.org/">https://openweathermap.org/</a></p>
                    </div>   
            <button @click ="place.showPhotos=!place.showPhotos"  class="waves-effect waves-light btn" ><i class="material-icons left">photo</i>Galeria ({{photos.length}})</button>
            <div v-show="place.showPhotos">
              <Photos :photos="photos"/>
            </div>
        <button @click ="place.showComments=!place.showComments"  class="waves-effect waves-light btn">Opinie ({{comments.length}})</button>
        <div v-show="place.showComments">
            <CommentForm :id="placeId"/>
            <CommentList :comments="comments" @update-average="updateAverage"/>
        </div>
    </div>
    <div v-else>Nie znaleziono miejsca o takim indeksie.</div>
</template>
<script>
import CommentList from "@/components/CommentList.vue";
import CommentForm from "@/components/CommentForm.vue";
import Photos from "@/components/Photos.vue";
import placeService from "@/services/placeService.js";
import axios from 'axios'
export default {
  name: "Place",
  props: {
    placeId: {
      type: String,
      required: true
    },
  },
  components: { CommentList, CommentForm, Photos },
  // emits:['add-comment'],
  data() {
    return {
      place: null,
      showWeather: false,
      showComments: false,
      showPhotos: false,
      comments: null,
      weather:null,
      average:null,
      photos:null
    };
  },
  created() {
    this.getPlaceById(this.placeId);
    this.getCommentsForPlace(this.placeId);
    this.getPhotosForPlace(this.placeId)
  },
  methods: {
    updateAverage(a){
      console.log(a);
      this.average=a;
      return this.average
    },
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
     async getPhotosForPlace(id){
      this.photos = await placeService.getPhotosForPlace(id);
    },
    async revealWeather() {
      this.place.showWeather = !this.place.showWeather;
      let url = "http://api.openweathermap.org/data/2.5/onecall?lat=" + this.place.latitude+"&lon="+this.place.longitude+ "&appid=ce133af21bc2f8dd391c25474fae2b43&lang=pl";
      this.weather = await axios(url)
      console.log(this.weather.data)
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
