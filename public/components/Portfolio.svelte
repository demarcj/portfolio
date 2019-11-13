
<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<style>
  .image_me{
    width: 200px;
    border-radius:50%;
    border: 5px solid white
  }

  .summary{
    margin:30px 0;
  }

  .sites_link{
    color: #2d2148;
    font-size: 18px;
  }
</style>

<Header/>
<main class="portfolio_main">
  <section>
    <h1>Portfolio</h1>
    <img class="image_me" src="https://drive.google.com/uc?id=0B4i47o5V7RiSVThKbTJ4VlY1aTA&export=download" alt="An image of the creator of the page, DeMarc Johnson">
    <p class="summary">When looking at these sites use the inspector or the view source to check the top of either layout.css file or the script.js to see my signutare</p>
  </section>
  <section>
    <div class="swiper-container">
      <div class="site_list swiper-wrapper">
        <div class="sites swiper-slide"><a class="sites_link" href="http://www.waxahachie.com/">Waxahachie, TX</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="http://avonpark.cc/">Avon Park, FL</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://www.villageofmatteson.org/">Matteson, IL</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://www.uppermarlboromd.gov/">Upper Marlboro, MD</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://www.co.pine.mn.us/">Pine County, MN</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://www.franklin.mi.us/">Franklin, MI</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://www.somersetmd.us/">Somerset County, MD</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="http://www.ameliacova.com/">Amelia County, VA</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="http://www.cartercountyok.us/">Carter County, OK</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="http://www.blueashadvance.com/">Blue Ashedc OH</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="http://www.milfordtownship.com/">Milford Township, MI</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://www.cariboucountysheriff.com/">Caribou County Sheriff</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://www.cityoflakeport.com/">Lakeport, CA</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://www.allendalecounty.com/">Allendale County, SC</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://www.cityofelcampo.org/">El Campo, TX</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://www.bellavistaar.gov/">Bella Vista, AR</a></div>
        <div class="sites swiper-slide"><a class="sites_link" href="https://oglecounty.org">Ogle County, IL</a></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</main>
<Footer/>