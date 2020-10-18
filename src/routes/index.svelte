<script>
  import { onMount } from 'svelte'
  import Register from '../components/Register.svelte'
  const URL = 'https://discordapp.com/api/guilds/698177341586800672/widget.json'
  let discord
  let email
  let toggleModal = false
  onMount(async function () {
    const response = await fetch(URL)
    discord = await response.json()
    console.log(discord)
  })

  const toggleSubmit = () => {
    email = ''
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  .hero {
    background-color: #262d35;
  }

  .box {
    color: yellow;
    background-color: #33475b;
    margin-top: 2rem;
    text-align: center;
  }

  .logo_huge {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>CodeMonkeyWTF</title>
</svelte:head>

<section class="hero is-fullheight is-bold">
  <div class="hero-head" />
  <div class="hero body">
    <div class="container">
      <img class="logo_huge" src="code-monkeys-orange-dark-large.svg" alt="code monkey dot w t f logo" width="250" />
      {#if toggleModal}
        <Register on:close={() => (toggleModal = false)}>
          <p class="is-size-3 has-text-info">Register to be notified when site goes live!</p>
          <div class="field"><input class="input" type="email" placeholder="email address" bind:value={email} /></div>
          <input type="submit" value="Sign Up" on:submit={toggleSubmit} />
          <input
            type="reset"
            value="Cancel"
            on:click={() => {
              email = ''
              toggleModal = false
            }} />
        </Register>
      {/if}
      <p class="is-align-self-center" on:click={() => (toggleModal = true)}><a href="#">&lt register &gt</a></p>
      {#if discord !== undefined}
        <a href={discord.instant_invite} class="box has-text-centered">{discord.name}<br />
          Discord
          <br />Instant Invite!</a>
      {/if}
    </div>
  </div>
  <div class="hero-foot" />
</section>
