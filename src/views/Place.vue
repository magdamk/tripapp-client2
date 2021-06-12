<template lang="pl">
    <br/>
    <div v-if="place">
        <img v-bind:alt="place.name" v-bind:src="place.photo" style="height:200px;"/>
        <h2>{{place.name}}</h2>
            <p><strong>Opis: </strong>{{place.description}}</p>
            <p><strong>Współrzędne: </strong>{{geoposition}}</p>
            <p v-if="place.costToVisit"><strong>Koszt: </strong>{{place.costToVisit}} zł</p>
            <p v-else>Za darmo!</p>
            <button @click ="revealWeather()"  class="waves-effect waves-light btn" ><i class="material-icons left">cloud</i>Pogoda</button>
                    
                    <div v-if="place.showWeather">
                    <div>
                        <label>Miasto: </label><label id="cityLabel" ></label>
                    </div>
                    <div>
                        <label >Temperatura: </label><label id="tempLabel"></label>
                    </div>
                    <div>
                        <label >Niebo: </label><label id="skyLabel"></label>
                    </div>
                    <div>
                        <label>Wiatr: </label><label id="windLabel" ></label>
                    </div>
                    <div>
                        <label >Ciśnienie: </label><label id="pressureLabel"></label>
                    </div>
                    </div>   
        <button @click ="place.showComments=!place.showComments"  class="waves-effect waves-light btn">Opinie ({{place.comments.length}})</button>
        <div v-show="place.showComments">
            <CommentForm :id="place.id" @add-comment="addComment"/>
            <CommentList :comments="place.comments"/>
        </div>
        
    </div>
    <div v-else>Nie znaleziono miejsca o takim indeksie.</div>
</template>
<script>
import CommentList from "@/components/CommentList.vue";
import CommentForm from "@/components/CommentForm.vue";
import placeService from "@/services/placeService.js";
export default {
    name: "Place",
    props: {
        placeId: {
            type: String,
            required: true
        }
    }, 
    components: {CommentList, CommentForm},
   // emits:['add-comment'],
    data() {
        return {
            place: null,
            showWeather: false,
            showComments: false,
        }
    },
    created() {
        this.getPlaceById(this.placeId)
    },
    methods: {
        getPlaceById(id) {
            if (id) {
            this.place = placeService.getPlaceById(id)
            }
        }, 
        addComment(comment) {
            this.place.comments.push(comment.comment);
        },
        revealWeather() {
            this.place.showWeather = !this.place.showWeather;
            let cityName = this.place.city;
            console.log(cityName)
           /*
           let urlAddress = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=ce133af21bc2f8dd391c25474fae2b43";
            $.ajax({
            url: urlAddress,
            success: function(result) {
                //$("#response").html(JSON.stringify(result));
                $("#cityLabel").text(result.name + " " + result.sys.country);
                $("#tempLabel").html(((result.main.temp) - 273).toFixed(1) + "&deg;C");
                $("#skyLabel").html(result.weather[0].main);
                $("#windLabel").html(result.wind.speed + " km/h");
                $("#pressureLabel").html(result.main.pressure + " hPa");
            }
        })
        */
        }
    },
    computed: {
        geoposition() {
            return this.place.longitude + ', ' + this.place.latitude;
        }
    },
}
</script>
<style scoped>
.weather {
    border: 1px dotted blue;
    border-radius: 15%;
    background-color: lightblue;
    width:100px;
    text-align:center;
} 
img {
	max-width: 100%;
	height: auto;
}
</style>
