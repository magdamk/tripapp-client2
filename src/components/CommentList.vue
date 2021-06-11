<template lang="pl">
    <div>
    <p><strong>Średnia ocen: </strong>{{average.toFixed(2)}}</p>
        <div v-for="comment in comments" v-bind:key="comment.id">
            <Comment :comment="comment" />
            <hr/>
        </div>
    </div>
</template>
<script>
import Comment from "@/components/Comment.vue"
export default {
    name: "CommentList",
    components: {Comment},
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    computed:{
       average(){
            let sum = 0;
            let i = 0;
            let arr = this.comments;
            while (i < arr.length) {
                sum += arr[i].rate;
                i++;
            }
            return sum/this.comments.length;
        }
    },
}
</script>
<style scoped lang="pl">
    
</style>