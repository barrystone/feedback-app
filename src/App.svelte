<script>
  import FeedbackForm from './components/FeedbackForm.svelte';
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

  const deleteFeedback = (e) => {
    const itemId = e.detail;
    feedbacks = feedbacks.filter((feedback) => feedback.id !== itemId);
  };

  const createFeedBack = (e) => {
    const newFeedback = e.detail;
    // In there, we can't just push to array.
    feedbacks = [newFeedback, ...feedbacks];
  };
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats />
  <FeedBackList />
</main>

<style>
</style>
