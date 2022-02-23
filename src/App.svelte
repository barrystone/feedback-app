<script>
	export let name;

	let firstName = 'Barry';
	let lastName = 'Stone';
	$: name = firstName + lastName;

	let color = 'green';

	const toggle = ()=>{
		color = color==='green'?'red':'green';
	}

	let btn1Text = 'Continue';

	let showText = false;

</script>

<main>
	<h1 style="color: {color}">My name is {name}!</h1>
	{#if showText}
		<h2>
			What i want?
		</h2>
	{:else}
		<h2>
			I will become one of best developer.
		</h2>
 	{/if}

	<button on:click={()=>{ 
		showText= !showText;
		btn1Text= btn1Text==='Continue'?'Back':'Continue';
	}}>{btn1Text}</button>
	
	<br/>
	<button on:click={toggle}>change color to {color==='green'?'red':'green'}</button>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>