
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
    <img class="image_me" src="../public/images/DeMarc_Johnson.jpg" alt="An image of the creator of the page, DeMarc Johnson">
    <p class="summary">When looking at these sites use the inspector or the view source to check the top of either layout.css file or the script.js to see my signutare</p>
  </section>
  <section>
    <div class="swiper-container">
      <div class="site_list swiper-wrapper">
        <a class="sites_link swiper-slide" href="http://www.waxahachie.com/">
          Waxahachie, TX
          <img class="site_img" src="../public/images/waxahachie.jpg" alt="An image of the Waxachie Texas Site">
        </a> 
        <a class="sites_link swiper-slide" href="http://avonpark.cc/">
          Avon Park, FL
          <img class="site_img" src="../public/images/avon.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.villageofmatteson.org/">
        <img class="site_img" src="../public/images/matteson.jpg" alt="An image of the Avon Park Site">
          Matteson, IL
        </a>
        <a class="sites_link swiper-slide" href="https://www.uppermarlboromd.gov/">
          <img class="site_img" src="../public/images/marlboro.jpg" alt="An image of the Avon Park Site">
          Upper Marlboro, MD
        </a>
        <a class="sites_link swiper-slide" href="https://www.co.pine.mn.us/">
          <img class="site_img" src="../public/images/pinecounty.jpg" alt="An image of the Avon Park Site">
          Pine County, MN
        </a>
        <a class="sites_link swiper-slide" href="https://www.franklin.mi.us/">
          <img class="site_img" src="../public/images/franklinmi.jpg" alt="An image of the Avon Park Site">
          Franklin, MI
        </a>
        <a class="sites_link swiper-slide" href="https://www.somersetmd.us/">
          <img class="site_img" src="../public/images/somerset.jpg" alt="An image of the Avon Park Site">
          Somerset County, MD
        </a>
        <a class="sites_link swiper-slide" href="http://www.ameliacova.com/">
          <img class="site_img" src="../public/images/amelia.jpg" alt="An image of the Avon Park Site">
          Amelia County, VA
        </a>
        <a class="sites_link swiper-slide" href="http://www.cartercountyok.us/">
          <img class="site_img" src="../public/images/carterok.jpg" alt="An image of the Avon Park Site">
          Carter County, OK
        </a>
        <a class="sites_link swiper-slide" href="http://www.blueashadvance.com/">
          <img class="site_img" src="../public/images/blueashoh.jpg" alt="An image of the Avon Park Site">
          Blue Ashedc OH
        </a>
        <a class="sites_link swiper-slide" href="http://www.milfordtownship.com/">
          <img class="site_img" src="../public/images/milfordmi.jpg" alt="An image of the Avon Park Site">
          Milford Township, MI
        </a>
        <a class="sites_link swiper-slide" href="https://www.cariboucountysheriff.com/">
          <img class="site_img" src="../public/images/cariboucounty.jpg" alt="An image of the Avon Park Site">
          Caribou County Sheriff
        </a>
        <a class="sites_link swiper-slide" href="https://www.cityoflakeport.com/">
          <img class="site_img" src="../public/images/lakeport.jpg" alt="An image of the Avon Park Site">
          Lakeport, CA
        </a>
        <a class="sites_link swiper-slide" href="https://www.allendalecounty.com/">
          <img class="site_img" src="../public/images/allendale.jpg" alt="An image of the Avon Park Site">
          Allendale County, SC
        </a>
        <a class="sites_link swiper-slide" href="https://www.cityofelcampo.org/">
          <img class="site_img" src="../public/images/elcampo.jpg" alt="An image of the Avon Park Site">
          El Campo, TX
        </a>
        <a class="sites_link swiper-slide" href="https://www.bellavistaar.gov/">
          <img class="site_img" src="../public/images/bellavista.jpg" alt="An image of the Avon Park Site">
          Bella Vista, AR
        </a>
        <a class="sites_link swiper-slide" href="https://oglecounty.org/">
          <img class="site_img" src="../public/images/oglecounty.jpg" alt="An image of the Avon Park Site">
          Ogle County, IL
        </a>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</main>
<Footer/>