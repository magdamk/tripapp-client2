/* eslint-disable prettier/prettier */
<template lang="pl">
    <div>
        <form id="form2" method="post" @submit.prevent="onSubmit">
            <h3>Zostaw opinię:</h3>
            <div class="row">
            <div class="input-field inline">
                <label for="title">Tytuł:   </label>
                <input type="text" id="title" class="input-field" v-model.trim="title">
            </div>
            <div class="input-field inline">
                <label for="nick">Autor: </label>
                <input type="text" id="nick" v-model.trim="nick">
            </div>
            <div class="input-field inline">
             <label for="rate">Ocena: </label>
                <input type="number" id="rate" v-model.number="rate" min="1" max="5">
            </div>
            </div>
            <div class="input-field">
                <label for="content">Opinia: </label>
                <textarea id="content" type="text" v-model.trim="content" max="140"></textarea>
            </div>
            <div class="row">
            
            <div>
            <button class="btn waves-effect waves-light" type="submit">Wyślij<i class="material-icons right">send</i></button>
            </div>
            </div>
        </form>
    </div>
</template>
<script>
/* eslint-disable prettier/prettier */
import placeService from "@/services/placeService.js";
export default {
  name: "CommentForm",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: null,
      nick: null,
      content: null,
      rate: null,
    };
  },
  methods: {
   async  onSubmit() {
      if (!this.title || !this.nick || !this.content || !this.rate) {
        alert("Wypełnij wszystkie pola formularza.");
      } else {
        const params = {
            title: this.title,
            nick: this.nick,
            content: this.content,
            rate: this.rate
        }
        await placeService.createCommentforPlace(this.id,params)
        this.title = null
        this.nick = null
        this.content = null
        this.rate = null
       }
    }
  }
}
</script>
<style scoped>
#form {
  text-align: left;
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
}
label,
input,
select {
  margin: 2px;
}
</style>
