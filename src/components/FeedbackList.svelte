<script>
  import FeedbackItem from './feedbackItem.svelte';

  export let feedbacks = [];
  // console.log(feedbacks)
</script>

{#each feedbacks as feedback (feedback.id)}
  <FeedbackItem item={feedback} on:delete-feedback />
{/each}
