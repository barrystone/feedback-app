<script>
  import { fade, scale } from 'svelte/transition';
  import FeedbackItem from './feedbackItem.svelte';

  export let feedbacks = [];
</script>

{#each feedbacks as feedback (feedback.id)}
  <!-- See svelte documentation for animation , there has bounch way to animate-->
  <!-- <div transition:fade> -->
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedbackItem item={feedback} on:delete-feedback />
  </div>
{/each}
