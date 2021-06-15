/* eslint-disable prettier/prettier */
<template lang="pl">
    <div>
    <p><strong>Średnia ocen: </strong><span :class="{'good': average>3, 'bad':average<3, 'neutral':average==3}">{{average}}/5</span></p>
        
        <div v-for="comment in comments" v-bind:key="comment._id">
            <Comment :comment="comment" />
           
        </div>
    </div>
</template>
<script>
import Comment from "@/components/Comment.vue";

export default {
  name: "CommentList",
  components: { Comment },
  props: {
    comments: {
      type: Array,
    },
  },
  computed: {
    average() {
      let sum = 0;
      let i = 0;
      if (this.comments.length) {
        let arr = this.comments;
        while (i < arr.length) {
          sum += arr[i].rate;
          i++;
        }
        return (sum / this.comments.length).toFixed(0);
      } else return "Brak opinii";
    },
  },
};
</script>
<style scoped>
.good {
  background-color: lightgreen;
}
.bad {
  background-color: red;
}
.neutral {
  background-color: yellow;
}
</style>
