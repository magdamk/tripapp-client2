<template lang="pl">
    <div class="comment">
        <p><strong>Tytuł: </strong>{{comment.title}}</p>
        <p><strong>Autor: </strong>{{comment.nick}}</p>
        <p><strong>Opinia: </strong>{{comment.content}}</p>
        <p><strong>Ocena: </strong><span v-if="comment.rate>3" class="good">{{comment.rate}}/5</span>
        <span v-else-if="comment.rate<3" class="bad">{{comment.rate}}/5</span>
        <span v-else class="neutral">{{comment.rate}}/5</span></p>
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
<style>
.comment{
    border: 1px solid gray;
    border-radius: 1%;
}
.good{
    background-color:lightgreen;
  }  
.bad {
    background-color:red;
  }
.neutral{
    background-color:yellow;
  }
</style>