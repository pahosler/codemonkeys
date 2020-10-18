<script>
  export let segment;
  let toggleNavbar = false;
  const handleToggle = () => toggleNavbar = !toggleNavbar;
</script>

<style>
  .navbar-brand,
  .navbar-end {
    flex: 1;
    justify-content: center;
  }

  .navbar-burger {
    padding: 10px;
    margin-right: 10px;
    margin-top: 5px;
  }

  .menu {
    font-family: Gilroy;
    font-weight: bold;
    font-style: normal;
  }
</style>

<nav class='navbar' aria-label='main navigation'>
  <div class='navbar-brand is-centered'>
    <a href="/" class='navbar-item'>
      <img src="images/equineadvantage_logo.svg" alt='logo' />
    </a>
    <div class={`navbar-burger ${ toggleNavbar ? 'is-active' : '' }`} data-target='navMenu' on:click={handleToggle}>
      <span />
      <span />
      <span />
    </div>
  </div>
  <div class={`navbar-menu ${toggleNavbar ? 'is-active' : '' }`} id='navMenu'>
    <div class='menu navbar-end'>
      <a href={'/locator'} class='navbar-item'>
        FIND A STORE
      </a>
      <a href='#contact' target='_self' class='navbar-item'>
        CONTACT US
      </a>
    </div>
  </div>
</nav>