<template>
  <div class="grid-container">
    <div v-on:click="toggleMenu" class="menu-icon">
      <!--<i class="fas fa-bars"></i>-->
      <font-awesome-icon icon="bars" />
    </div>
    <header class="header">
      <div class="header__search">Search...</div>
      <div class="header__settings">Settings</div>
    </header>
    <aside v-bind:class="{ active: isActive }" class="sidenav">
      <div v-on:click="toggleMenu" class="sidenav__close-icon">
        <!--<i class="fas fa-times"></i>-->
        <font-awesome-icon icon="times" />
      </div>
      <ul class="sidenav__list">
        <li class="sidenav__list-item">Item One</li>
        <li class="sidenav__list-item">Item Two</li>
        <li class="sidenav__list-item">Item Three</li>
        <li class="sidenav__list-item">Item Four</li>
        <li class="sidenav__list-item">Item Five</li>
      </ul>
    </aside>
    <main class="main">
      <div class="main-header">
        <div class="main-header__heading">Hello User</div>
        <div class="main-header__updates">Recent Items</div>
      </div>
      <div class="main-overview">
        <div class="overviewcard">
          <div class="overviewcard__icon">Overview</div>
          <div class="overviewcard__info">Card</div>
        </div>
        <div class="overviewcard">
          <div class="overviewcard__icon">Overview</div>
          <div class="overviewcard__info">Card</div>
        </div>
        <div class="overviewcard">
          <div class="overviewcard__icon">Overview</div>
          <div class="overviewcard__info">Card</div>
        </div>
        <div class="overviewcard">
          <div class="overviewcard__icon">Overview</div>
          <div class="overviewcard__info">Card</div>
        </div>
      </div>
      <div class="main-cards">
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__copyright">&copy; 2019 HHA</div>
    </footer>
    <!--<sidemenu/>
    <div class="container">
      <h1>Panel</h1>
    </div>-->
  </div>
</template>

<script>
import Sidemenu from './Sidemenu.vue'

// eslint-disable-next-line
//const sidemenu = require('../Sidemenu.js')

export default {
  name: 'Panel',
  components: {
    Sidemenu
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr; /* Side nav is hidden on mobile */
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    'header'
    'main'
    'footer';
  height: 100vh;
}

.header {
  grid-area: header;
}

/* Make room for the menu icon on mobile */
.header__search {
  margin-left: 42px;
}

.sidenav {
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  position: fixed;
  overflow-y: auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  z-index: 2; /* Needs to sit above the hamburger menu icon */
  background-color: #394263;
  transform: translateX(-245px);
  transition: all .6s ease-in-out;
}

/* The active class is toggled on hamburger and close icon clicks */
.sidenav.active {
  transform: translateX(0);
}

/* Only visible on mobile screens */
.sidenav__close-icon {
  position: absolute;
  visibility: visible;
  top: 8px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #ddd;
}

.menu-icon {
  position: fixed;
  display: flex;
  top: 5px;
  left: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  padding: 12px;
  background-color: #DADAE3;
}

.sidenav__list {
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
}

.sidenav__list-item {
  padding: 20px 20px 20px 40px;
  color: #ddd;
}

.sidenav__list-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.main {
  grid-area: main;
  background-color: #8fd4d9;
}

.main-header {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
  height: 150px; /* Placeholder height to simulate content */
  background-color: #e3e4e6;
  color: slategray;
}

.main-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  grid-auto-rows: 94px;
  grid-gap: 20px;
  margin: 20px;
}

.overviewcard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #d3d3;
}

.main-cards {
  column-count: 1;
  column-gap: 20px;
  margin: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #82bef6;
  margin-bottom: 20px;
  -webkit-column-break-inside: avoid;
  padding: 24px;
  box-sizing: border-box;
}

/* Height to simulate content */
.card:first-child {
  height: 485px;;
}

.card:nth-child(2) {
  height: 200px;
}

.card:nth-child(3) {
  height: 265px;
}

.footer {
  grid-area: footer;
}

.header,
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #648ca6;
}

/* Non-mobile styles, 750px breakpoint */
@media only screen and (min-width: 46.875em) {
  /* Show the sidenav */
  .grid-container {
    grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
    grid-template-areas:
      "sidenav header"
      "sidenav main"
      "sidenav footer";
  }
  .sidenav {
    position: relative; /* Fixed position on mobile */
    transform: translateX(0);
  }
  .sidenav__close-icon {
    visibility: hidden;
  }
}
 /* Medium-sized screen breakpoint (tablet, 1050px) */
 @media only screen and (min-width: 65.625em) {
   /* Break out main cards into two columns */
   .main-cards {
     column-count: 2;
   }
 }
/* .container {
  background-color: antiquewhite;
  margin-left: 200px;
  padding: 0.01em 16px;
  content: "";
  display: table;
  clear: both;
  width: auto;
} */
</style>
