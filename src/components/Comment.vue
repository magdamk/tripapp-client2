<template lang="pl">
    <div class="comment">
        <p><strong>Tytuł: </strong>{{comment.title}}</p>
        <p><strong>Autor: </strong>{{comment.nick}}</p>
        <p><strong>Data wizyty: </strong>{{comment.dateOfVisit.slice(0,10)}}</p>
        <p><strong>Opinia: </strong>{{comment.content}}</p>
        <p><strong>Ocena: </strong><span v-if="comment.rate>3" class="good"><i class="material-icons">sentiment_very_satisfied</i></span>
        <span v-else-if="comment.rate<3" class="bad"><i class="material-icons">sentiment_very_dissatisfied</i></span>
        <span v-else class="neutral"><i class="material-icons">sentiment_neutral</i></span></p>
    </div>
</template>
<script>
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.comment {
  border: 1px solid gray;
  border-radius: 1%;
}
.good {
  color: green;
}
.bad {
  color: red;
}
.neutral {
  color: rgb(255, 230, 0);
}
</style>
