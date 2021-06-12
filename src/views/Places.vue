<template lang="pl">
    <div>
        <table>
            <thead>
                <tr>
                    <th>Miejsce</th>
                    <th>Akcja</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="place in places" v-bind:key="place.id">
                    <td @click="goToPlace(place.id)">{{place.name}}</td>
                    <td>
                        <button @click="goToPlace(place.id)">Pokaż</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
//import Place from "@/components/Place.vue";
import placeService from "@/services/placeService.js";

export default {
    name: "Places",
    components: {
        //Place
        },
    data() {
        return {
            places: []
            
        }
    },
    created() {
        this.getAllPlaces()
    },
    methods:{
        getAllPlaces(){
            this.places = placeService.getAllPlaces()
        },
        goToPlace(id){
            this.$router.push('/places/' + id)
        },
      addComment(comment){
        let i = this.places.findIndex(function(element) {if (element.id===comment.placeId) return true 
                    else return false})
        this.places[i].comments.push(comment.comment)
        },  
      revealWeather(){
         
      }
    },
   
    }

</script>
<style scoped lang="pl">
    
</style>