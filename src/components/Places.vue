<template lang="pl">
    <div>
        <div v-for="place in places" v-bind:key="place.id">
        <Place :place="place" />
    <hr/>
  </div>
    </div>
</template>
<script>
import Place from "@/components/Place.vue";
export default {
    name: "Places",
    components: {Place},
    data() {
        return {
            places: [
            {
                id: "001",
                name: "Zamek Królewski w Warszawie",
                photo:"https://duckduckgo.com/i/2b942462.jpg",
                description: "Zamek Królewski w Warszawie – barokowo-klasycystyczny zamek królewski znajdujący się w Warszawie przy placu Zamkowym 4.",
                costToVisit: 30,
                longitude: 52.247778,
                latitude: 21.01416,
                showWeather: false
            },
            {
                id: "002",
                name: "Łazienki Królewskie w Warszawie",
                photo:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lBmk_8fsyQsS7d7rBZkKcgHaET%26pid%3DApi&f=1",
                description: "Łazienki Królewskie – zespół pałacowo-ogrodowy w Warszawie założony w XVIII wieku przez Stanisława Augusta Poniatowskiego. Nazwa pochodzi od barokowego pawilonu Łaźni, wzniesionego w latach 80. XVII wieku przez Stanisława Herakliusza Lubomirskiego i przebudowanego przez Stanisława Augusta Poniatowskiego na pałac Na Wyspie.",
                costToVisit: 0,
                longitude: 52.214444,
                latitude: 21.031667,
                showWeather: false
            }
            ]
        }
    }
}
</script>
<style scoped lang="pl">
    
</style>