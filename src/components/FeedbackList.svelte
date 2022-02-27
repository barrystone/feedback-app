<script>
  // import { onMount, onDestroy } from 'svelte';
  import { FeedbackStore } from '../store';
  import { fade, scale } from 'svelte/transition';
  import FeedbackItem from './feedbackItem.svelte';

  // let feedbacks = [];
  // const unsubscribe = FeedbackStore.subscribe((data) => (feedbacks = data));

  // onMount(() => {
  //   console.log('mounted');
  // });
  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<!-- {#each feedbacks as feedback (feedback.id)} -->
{#each $FeedbackStore as feedback (feedback.id)}
  <!-- See svelte documentation for animation , there has bounch way to animate-->
  <!-- <div transition:fade> -->
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedbackItem item={feedback} />
  </div>
{/each}
