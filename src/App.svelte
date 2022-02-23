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

	let users = [
		{
			id:'1',
			name:'Barry'
		},
		{
			id:'2',
			name:'Jack'
		},
		{
			id:'3',
			name:'Tom'
		},
		
	];
	let usernameInput = '';
	let idCount = 3;
	let warning = '';

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
	<br/>

	<button on:click={()=>{
		users = [...users,
		{
			id: idCount+1,
			name: usernameInput
		}]
		warning= "This 'Add a user' button just one time available."
				+ "</br>"
				+ "If click it more than one time, the app just broke. only way to fix it is refresh page."
				+ "</br>"
				+ "Honest it, in this moment ,for a beginner, i don't know why...";

	}}>Add a user
	</button>
	<input type="text" on:change={(e)=>usernameInput=e.target.value}>
	<p>{@html warning}</p>

	<ul style="list-style: none;">
		{#each users as user (user.id)}
				<li>{user.id}: {user.name}</li>
		{/each}
	</ul>
	
	




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