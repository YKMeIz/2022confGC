<template>
  <div>
    <div class="section section-features bg-gray text-center">
      <div class="container grid-lg">
        <h2>Venue and Accommodation</h2>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto">
            <p>
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/d2/91/64/jw-marriott-gold-coast.jpg?w=2400&h=-1&s=1"
                alt="..." class="img-responsive">
            </p>
            <p>
              JW Marriott Hotel, Gold coast, Australia
            </p>
            <p>
              Hotel Tel: 61 7 5592 9722<br>
              Hotel Email: <a
                                   href="mailto:courtney.gough@jwmarriott.com">
              courtney.gough@jwmarriott.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-features bg-gray text-center">
      <div class="container grid-lg">
        <h2>Location</h2>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto">
            <p>
              JW Marriott Gold Coast, Tamborine Gallery,
              158 Ferny Avenue, Gold Coast, Queensland 4217
            </p>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe width="100%" height="400px" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=JW%20Marriott%20Gold%20Coast&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="..."></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VenueView',
};
</script>

<style scoped>

</style>
