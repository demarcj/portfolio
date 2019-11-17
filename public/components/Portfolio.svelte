
<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<style>
  .image_me{
    width: 380px;
    max-width: 100%;
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
    text-align: center;
  }
  .site_img{
    width:100%;
    min-height:300px;
    max-height: 350px;
  }
  .site_name{
    background: white;
  }

  @media screen and (max-width: 467px) { 
    .image_me{
      width: 100%;
    }
  }
</style>

<Header/>
<main class="portfolio_main">
  <section class="test">
    <h1>Portfolio</h1>
    <img class="image_me" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/DeMarc_Johnson.jpg" alt="An image of the creator of the page, DeMarc Johnson">
    <p class="summary">When looking at these sites use the inspector or the view source to check the top of either layout.css file or the script.js to see my signutare</p>
  </section>
  <section>
    <div class="swiper-container">
      <div class="site_list swiper-wrapper">
        <a class="sites_link swiper-slide" href="http://www.waxahachie.com/">
          <p class="site_name">Waxahachie, TX</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/waxahachie.jpg" alt="An image of the Waxachie Texas Site">
        </a> 
        <a class="sites_link swiper-slide" href="http://avonpark.cc/">
          <p class="site_name">Avon Park, FL</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/avon.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.villageofmatteson.org/">
          <p class="site_name">Matteson, IL</p>
        <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/matteson.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.uppermarlboromd.gov/">
          <p class="site_name">Upper Marlboro, MD</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/marlboro.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.co.pine.mn.us/">
          <p class="site_name">Pine County, MN</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/pinecounty.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.franklin.mi.us/">
          <p class="site_name">Franklin, MI</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/franklinmi.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.somersetmd.us/">
          <p class="site_name">Somerset County, MD</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/somerset.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="http://www.ameliacova.com/">
          <p class="site_name">Amelia County, VA</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/amelia.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="http://www.cartercountyok.us/">
          <p class="site_name">Carter County, OK</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/carterok.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="http://www.blueashadvance.com/">
          <p class="site_name">Blue Ashedc OH</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/blueashoh.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="http://www.milfordtownship.com/">
          <p class="site_name">Milford Township, MI</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/milfordmi.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.cariboucountysheriff.com/">
          <p class="site_name">Caribou County Sheriff</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/cariboucounty.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.cityoflakeport.com/">
          <p class="site_name">Lakeport, CA</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/lakeport.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.allendalecounty.com/">
          <p class="site_name">Allendale County, SC</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/allendale.jpg " alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.cityofelcampo.org/">
          <p class="site_name">El Campo, TX</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/elcampo.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://www.bellavistaar.gov/">
          <p class="site_name">Bella Vista, AR</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/bellavista.jpg" alt="An image of the Avon Park Site">
        </a>
        <a class="sites_link swiper-slide" href="https://oglecounty.org/">
          <p class="site_name">Ogle County, IL</p>
          <img class="site_img" src="https://raw.githubusercontent.com/demarcj/portfolio/master/images/oglecounty.jpg" alt="An image of the Avon Park Site">
        </a>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</main>
<Footer/>