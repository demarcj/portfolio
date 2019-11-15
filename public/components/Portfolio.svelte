
<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<style>
  .image_me{
    width: 280px;
    border-radius:50%;
    border: 5px solid white;
    display: block;
    margin: 0 auto;
  }

  .summary{
    margin:30px 0;
  }
  .site_list{
    height: 330px;
    margin-bottom: 50px
  }
  .sites_link{
    color: #ae4226;
    font-size: 18px;
    background:white;
    text-align: center;
  }
  .site_img{
    width:100%;
  }
</style>

<Header/>
<main class="portfolio_main">
  <section>
    <h1>Portfolio</h1>
    <img class="image_me" src="images/DeMarc_Johnson.jpg" alt="An image of the creator of the page, DeMarc Johnson">
    <p class="summary">When looking at these sites use the inspector or the view source to check the top of either layout.css file or the script.js to see my signutare</p>
  </section>
  <section>
    <div class="swiper-container">
      <div class="site_list swiper-wrapper">
        <a class="sites_link swiper-slide" href="http://www.waxahachie.com/">
          Waxahachie, TX
          <img class="site_img" src="images/waxahachie.jpg" alt="An image of the Waxachie Texas Site">
        </a> 
        <a class="sites_link swiper-slide" href="http://avonpark.cc/">
          Avon Park, FL
          <img class="site_img" src="images/avon.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.villageofmatteson.org/">
          Matteson, IL
        <img class="site_img" src="images/matteson.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.uppermarlboromd.gov/">
          Upper Marlboro, MD
          <img class="site_img" src="images/marlboro.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.co.pine.mn.us/">
          Pine County, MN
          <img class="site_img" src="images/pinecounty.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.franklin.mi.us/">
          Franklin, MI
          <img class="site_img" src="images/franklinmi.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.somersetmd.us/">
          Somerset County, MD
          <img class="site_img" src="images/somerset.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="http://www.ameliacova.com/">
          Amelia County, VA
          <img class="site_img" src="images/amelia.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="http://www.cartercountyok.us/">
          Carter County, OK
          <img class="site_img" src="images/carterok.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="http://www.blueashadvance.com/">
          Blue Ashedc OH
          <img class="site_img" src="images/blueashoh.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="http://www.milfordtownship.com/">
          Milford Township, MI
          <img class="site_img" src="images/milfordmi.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.cariboucountysheriff.com/">
          Caribou County Sheriff
          <img class="site_img" src="images/cariboucounty.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.cityoflakeport.com/">
          Lakeport, CA
          <img class="site_img" src="images/lakeport.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.allendalecounty.com/">
          Allendale County, SC
          <img class="site_img" src="images/allendale.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.cityofelcampo.org/">
          El Campo, TX
          <img class="site_img" src="images/elcampo.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.bellavistaar.gov/">
          Bella Vista, AR
          <img class="site_img" src="images/bellavista.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://oglecounty.org/">
          Ogle County, IL
          <img class="site_img" src="images/oglecounty.jpg" alt="An image of the Avon Park Site">
        </a>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</main>
<Footer/>