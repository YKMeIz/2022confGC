<template>
  <div class="section section-updates bg-primary text-light text-center">
    <div class="container grid-lg">
      <h2>Sponsors</h2>
      <br>
      <div class="columns">
        <div class="column col-4 col-xs-10 col-mx-auto">
          <a href="https://www.griffith.edu.au/">
            <img
              src="https://www.griffith.edu.au/__data/assets/file/0027/464823/griffith-logo-qld-white.svg?v=0.1.2"
              alt="Griffith University">
          </a>
        </div>
        <div class="column col-4 col-xs-10 col-mx-auto">
<!--          <a href="https://www.qld.gov.au/">-->
<!--            <img src="https://www.qld.gov.au/__data/assets/git_bridge/0029/95447/static.qgov.net.au/assets/v4/latest/images/coat-of-arms/qg-coa-white.svg"-->
<!--                 alt="Queensland Government">-->
<!--          </a>-->
          <a href="https://www.qld.gov.au/">
            <img src="https://budget.qld.gov.au/files/qg-coa-stacked-rev1.png"
                 style="width:100%"
                 alt="Queensland Government">
          </a>
        </div>
        <div class="column col-4 col-xs-10 col-mx-auto">
          <a href="https://csbt.scimall.org.cn">
            <img src="@/assets/csbt.png" style="width:100%"
                 alt="CSBT">
          </a>
        </div>
      </div>
      <div class="columns">
        <div class="column col-4 col-xs-10 col-mx-auto">
          <a href="https://qut.edu.au/">
            <img src="https://www.qut.edu.au/__data/assets/file/0010/894628/logo-strapline-two-deck-right.svg?v=0.0.1"
                 alt="Queensland University of Technology">
          </a>
        </div>
        <div class="column col-4 col-xs-10 col-mx-auto">
          <a href="https://uq.edu.au/">
            <img
              src="https://static.uq.net.au/v11/logos/corporate/uq-logo--reversed.svg"
              alt="University of Queensland">
          </a>
        </div>
        <div class="column col-4 col-xs-10 col-mx-auto">
          <a href="https://www.unisq.edu.au/">
            <img src="https://www.unisq.edu.au/Content/USQ/Charlie/Images/unisq-logo-acronym-white.svg"
                 style="max-height: 90px"
                 alt="University of Southern Queensland">
          </a>
        </div>
      </div>
    </div>
  </div>
  <footer class="section section-footer">
    <div class="docs-footer container grid-lg" id="copyright">
      <p>
        Copyright © 2022 - All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
};
</script>

<style scoped>
.column {
  padding: 1em
}
</style>
