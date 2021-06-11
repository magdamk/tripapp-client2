<template lang="pl">
    <div>
        <img v-bind:alt="place.name" v-bind:src="place.photo" style="height:200px;"/>
    <h2>{{place.name}}</h2>
    <div>
      <p><strong>Opis: </strong>{{place.description}}</p>
      <p><strong>Współrzędne: </strong>{{geoposition}}</p>
      <p v-if="place.costToVisit"><strong>Koszt: </strong>{{place.costToVisit}} zł</p>
      <p v-else>Za darmo!</p>
       <button @click ="place.showWeather=!place.showWeather">Pogoda</button>
            <p class="weather" v-if="place.showWeather">Słonecznie</p>
            <button @click ="place.showComments=!place.showComments">Opinie ({{place.comments.length}})</button>
            <div v-show="place.showComments">
            <CommentForm :id="place.id" @add-comment="addComment"/>
            <CommentList :comments="place.comments"/>
       </div>
    </div>
    
    </div>
</template>
<script>
import CommentList from "@/components/CommentList.vue";
import CommentForm from "@/components/CommentForm.vue";
export default {
    name: "Place",
    components: {CommentList, CommentForm},
    emits:['add-comment'],
    props: {
        place: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            showWeather: false,
            showComments: false,
        }
    },
    methods:{
       addComment(comment){
           this.$emit('add-comment',comment)
       }
    },
    computed: {
        geoposition(){
            return this.place.longitude + ', ' + this.place.latitude;
        }
    },
    
}
</script>
<style scoped>
.weather{
    border: 1px dotted blue;
    border-radius: 15%;
    background-color: lightblue;
    width:100px;
    text-align:center;
} 
</style>