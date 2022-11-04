<template>
  <div class="section section-hero">
    <div class="grid-hero container grid-lg text-center" id="overview">
      <div class="docs-brand">
        <header class="navbar">
          <section class="navbar-section">
            <div :class="dp">
<!--              <button class="btn btn-link" @click="updateDP()">-->
<!--                <i class="icon icon-menu">.</i>-->
<!--              </button>-->
              <a class="btn btn-link dropdown-toggle" tabindex="0">
                <i class="icon icon-menu">.</i>
              </a>
              <!-- menu component -->
              <ul class="menu">
                <li class="menu-item"><a class="btn btn-link" href="#/">Home</a></li>
                <li><a class="btn btn-link" href="#/organizers">
                  Organizers
                </a></li>
                <li class="menu-item"><a class="btn btn-link" href="#/speakers">
                  Speakers</a></li>
                <li class="menu-item"><a class="btn btn-link" href="#/registration">Registration
                </a></li>
                <li class="menu-item"><a class="btn btn-link" href="#/schedule">Conference Program
                </a></li>
                <li class="menu-item"><a class="btn btn-link" href="#/contact">
                  Contact Us</a></li>
                <li class="menu-item"><a class="btn btn-link" href="#/venue">
                  Venue
                </a></li>
              </ul>
            </div>
            <div class="hide-md">
              <a href="#/" class="btn btn-link">Home</a>
              <a href="#/organizers" class="btn btn-link">Organizers</a>
              <a href="#/speakers" class="btn btn-link">Speakers</a>
              <a href="#/registration" class="btn btn-link">Registration</a>
              <a href="#/schedule" class="btn btn-link">Conference Program</a>
              <a href="#/contact" class="btn btn-link">Contact</a>
              <a href="#/venue" class="btn btn-link">Venue</a>
            </div>
          </section>
        </header>
      </div>
      <h1>{{ title }}</h1>
      <img src="https://www.goldcoastaustralia.com/assets/images/banner_home1.jpg"
           class="img-responsive"
           alt="..." v-if="$route.path==='/'">
      <br>
      <h2>November 24-25, 2022<br>Griffith University Gold Coast Campus, Gold coast, Australia</h2>
      <div class="column col-10 col-sm-12 col-mx-auto" v-if="$route.path==='/'">
        <a class="btn btn-lg btn-primary" href="https://forms.office.com/r/9fkwd8JTFZ">
          Register Now</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      dp: 'dropdown show-md',
      title: '2022 Conference on Integration of Big Data, Information Management, and Digital Technologies to Health Research',
    };
  },
  created() {
    document.title = this.title;
  },
  watch: {
    $route() {
      this.dp = 'dropdown show-md';
    },
  },
  methods: {
    updateDP() {
      if (this.dp === 'dropdown show-md active') {
        this.dp = 'dropdown show-md';
      } else {
        this.dp = 'dropdown show-md active';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
