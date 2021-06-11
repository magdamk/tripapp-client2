<template lang="pl">
    <div>
        <form id="form" @submit.prevent="onSubmit">
            <h3>Zostaw opinię:</h3>
            <div>
                <label for="title">Tytuł: </label>
                <input id="title" v-model.trim="title">
            </div>
            <div>
                <label for="nick">Autor: </label>
                <input id="nick" v-model.trim="nick">
            </div>
            <div>
                <label for="content">Treść: </label>
                <input id="content" v-model.trim="content">
            </div>
            <div>
                <label for="rate">Ocena: </label>
                <select id="rate" v-model.number="rate">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </div>
            <button class="button" type="submit">Wyślij</button>
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
    data(){
        return {
            title: null,
            nick: null,
            content: null,
            rate: null
        }
    },
    methods:{
        onSubmit(){
            if (!this.title || !this.nick || !this.content || !this.rate){
                alert('Wypełnij wszystkie pola formularza.')
            }
            else {
                console.log(this.id);
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
    border: 1px solid gray;
    margin: 10px;
    padding: 10px;
}
label,input, select {
    margin: 2px;
}
</style>