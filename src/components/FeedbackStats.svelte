<script>
  import { FeedbackStore } from '../store';

  $: count = $FeedbackStore.length;
  $: ratingAverage = (
    $FeedbackStore.reduce((x, { rating }) => x + rating, 0) /
    $FeedbackStore.length
  ).toFixed(2);
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
