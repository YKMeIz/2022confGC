<template>
  <div>
    <div class="section section-features bg-gray text-center">
      <div class="container grid-lg">
        <h2>Venue and Accommodation</h2>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto">
            <img :src="require('@/assets/g07.png')" alt="..." style="width:100%"/>
            <h1>G07 Function Centre</h1>
            <p>Griffith University, Gold Coast Campus, 1 Parklands Dr, Southport, QLD 4222</p>
          </div>
        </div>
        <!--        <div class="columns">-->
        <!--          <div class="column col-10 col-sm-12 col-mx-auto">-->
        <!--            <p>-->
        <!--<img-->
        <!--  src="https://cache.marriott.com/content/dam/marriott-renditions/OOLSP/oolsp-tamborine-gallery-9452-sq.jpg"-->
        <!--  alt="..." class="img-responsive">-->
        <!--            </p>-->
        <!--            <p class="text-justify">-->
        <!--<strong>Tamborine Gallery</strong>, a blank-->
        <!--canvas flooded with natural light and pool views,-->
        <!--providing a stylish space for creative meetings and-->
        <!--events.-->
        <!--            </p>-->
        <!--          </div>-->
        <!--          <div class="column col-10 col-sm-12 col-mx-auto">-->
        <!--            <p>-->
        <!--<img-->
        <!--  src="https://cache.marriott.com/content/dam/marriott-renditions/OOLSP/oolsp-exterior-6406-hor-clsc.jpg"-->
        <!--  alt="..." class="img-responsive">-->
        <!--            </p>-->
        <!--            <p class="text-justify">-->
        <!--     Unwind at a luxury five-star resort in the town of Surfers Paradise. <strong>JW-->
        <!--Marriott Gold-->
        <!--Coast Resort & Spa</strong> boasts brand-new guest rooms, award-winning service and a-->
        <!--covetable-->
        <!--location on Australia's Gold Coast. Attend events at Gold Coast Convention Centre,-->
        <!--treat the family to Sea World Gold Coast or Dreamworld and stroll the beautiful-->
        <!--beaches of Surfers Paradise. Our redesigned hotel rooms and suites offer an ideal-->
        <!--setting to relax after a busy day, complete with high-speed Wi-Fi, plush bedding and-->
        <!--pristine marble bathrooms. Wake up feeling refreshed and take advantage of our superb-->
      <!--resort facilities, from peaceful saltwater lagoons and an outdoor freshwater pool with-->
        <!--a slide to a modern fitness centre and Sport Court®. One-of-a-kind resort experiences-->
        <!--in Surfers Paradise include culinary cooking classes, JW Garden herb planting and-->
        <!--guided tours, daily fish feeding, snorkeling in the saltwater lagoons and much more.-->
        <!--Leave richer than when you left at JW Marriott Gold Coast Resort & Spa.-->
        <!--            </p>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>

    <!--    <div class="section section-features bg-gray text-center">-->
    <!--      <div class="container grid-lg">-->
    <!--        <h2>JW Marriott Contact</h2>-->
    <!--        <div class="columns">-->
    <!--          <div class="column col-10 col-sm-12 col-mx-auto">-->
    <!--            <p>-->
    <!--Website: <a-->
    <!--href="https://www.marriott.com/en-us/hotels/oolsp-jw-marriott-gold-coast-resort-and-spa/overview/">Click-->
    <!--link here for JW Marriott</a><br>-->
    <!--Tel: 61 7 5592 9722<br>-->
    <!--Email: <a-->
    <!--href="mailto:courtney.gough@jwmarriott.com">-->
    <!--courtney.gough@jwmarriott.com</a>-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="section section-features bg-gray text-center">
      <div class="container grid-lg">
        <h2>Parking</h2>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto">
            <img :src="require('@/assets/parking-map.png')" alt="..." style="width:100%"/>
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
1 Parklands Dr, Southport, QLD 4222
            </p>
            <div class="mapouter">
<div class="gmap_canvas">
  <iframe width="100%" height="400px" id="gmap_canvas"
          src="https://maps.google.com/maps?q=Griffith+University,+Gold+Coast+Campus,+Parklands+Drive,+Southport+QLD+4215,+Australia&t=&z=15&ie=UTF8&iwloc=&output=embed"
          title="..."></iframe>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-features bg-gray text-center">
      <div class="container grid-lg">
        <h2>Accommodation</h2>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto">
            <p>
<strong>Mantra Legends Surfers Paradise</strong><br>
Website: <a
href="https://www.mantra.com.au/queensland/gold-coast/surfers-paradise/accommodation/hotels/mantra-legends-hotel/">Click
link here</a>
<br>Tel: (07) 5588 7879
<br>Address: 25 Laycock Street, Surfers Paradise, QLD 4217, Australia
            </p>
            <p>
<strong>Mantra Southport Sharks</strong><br>
Website: <a
href="https://www.mantra.com.au/queensland/gold-coast/southport/accommodation/mantra-at-sharks/">Click
link here</a>
<br>Tel: (07) 5603 3200
<br>Address: Melia Ct, Southport, QLD 4215, Australia
            </p>
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
