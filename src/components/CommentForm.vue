<template lang="pl">
    <div>
        <form id="form" @submit.prevent="onSubmit">
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
                <input type="number" id="rate" v-model.number="rate" min="1" max="5" style="width:70px">
            </div>
            </div>
            <div class="input-field">
                <label for="content">Opinia: </label>
                <textarea id="content" type="text" v-model.trim="content" style="width:490px" placeholder="Twoje opinia"></textarea>
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
export default {
    name: "CommentForm",
    emits: ['add-comment'],
    props: {
        id: {
            type: String,
            required:true
        }
    },
    data() {
        return {
            title: null,
            nick: null,
            content: null,
            rate: null
        }
    },
    methods:{
        onSubmit(){
            if (!this.title || !this.nick || !this.content || !this.rate) {
                alert('Wypełnij wszystkie pola formularza.')
            }
            else {
            this.$emit('add-comment', {
                comment: {
                title: this.title,
                nick: this.nick,
                content: this.content,
                rate: this.rate
                },
                placeId:this.id
            })
            this.title = null,
            this.nick = null,
            this.content = null,
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
label,input, select {
    margin: 2px;
}
</style>