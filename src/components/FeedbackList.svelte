<script>
import FeedbackItem from "./feedbackItem.svelte";

    export let feedbacks = [];
    // console.log(feedbacks)
</script>

<main>
    {#each feedbacks as feedback (feedback.id)}
        <FeedbackItem item={feedback}/>
    {/each}
</main>