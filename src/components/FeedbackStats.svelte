<script>
  export let count;
  export let ratingAverage;
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {ratingAverage}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
