<template lang="pl">
    <div>
        <img v-bind:alt="place.name" v-bind:src="place.photo" style="height:200px;"/>
    <h2>{{name}}</h2>
    <div>
      <p><strong>Opis: </strong>{{place.description}}</p>
      <p><strong>Współrzędne: </strong>{{geoposition}}</p>
      <p v-if="place.costToVisit"><strong>Koszt: </strong>{{place.costToVisit}} zł</p>
      <p v-else>Za darmo!</p>
      
    </div>
    </div>
</template>
<script>
export default {
    name: "Place",
    props: {
        place: {
            type: Object,
            required: true
        }
    },
    computed: {
        geoposition(){
            return this.place.longitude + ', ' + this.place.latitude;
        }
    },
    
}
</script>
<style scoped lang="pl">
    
</style>