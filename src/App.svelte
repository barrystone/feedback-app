<script>
  import FeedBackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';

  let feedbacks = [
    {
      id: 1,
      rating: 8,
      text: 'good! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi sit amet. Fringilla phasellus faucibus scelerisque eleifend donec.'
    },
    {
      id: 2,
      rating: 1,
      text: 'bad!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi sit amet. Fringilla phasellus faucibus scelerisque eleifend donec.'
    },
    {
      id: 3,
      rating: 10,
      text: 'great!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi sit amet. Fringilla phasellus faucibus scelerisque eleifend donec.'
    }
  ];

  $: count = feedbacks.length;
  $: ratingAverage = (
    feedbacks.reduce((x, { rating }) => x + rating, 0) / feedbacks.length
  ).toFixed(2);

  const deleteFeedback = (e) => {
    const itemId = e.detail;
    feedbacks = feedbacks.filter((feedback) => feedback.id !== itemId);
  };
</script>

<main class="container">
  <FeedbackStats {count} {ratingAverage} />
  <FeedBackList {feedbacks} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
