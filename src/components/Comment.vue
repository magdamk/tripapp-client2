<template lang="pl">
    <div>
        <p><strong>Tytuł: </strong>{{comment.title}}</p>
        <p><strong>Autor: </strong>{{comment.nick}}</p>
        <p><strong>Opinia: </strong>{{comment.content}}</p>
        <p><strong>Ocena: </strong>{{comment.rate}}</p>
    </div>
</template>
<script>
export default {
    name: "Comment",
    props: {
        comment: { 
            type: Object, 
            required : true
        }
    }
}
</script>
<style lang="pl">
    
</style>