
<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  export let img;
  const cityNames = [
    {name: `Waxahachie, TX`, site: `http://www.waxahachie.com/`, image: img.waxahachie},
    {name: `Avon Park, FL`, site: `http://avonpark.cc/`, image: img.avon},
    {name: `Matteson, IL`, site: `https://www.villageofmatteson.org/`, image: img.matteson},
    {name: `Upper Marlboro, MD`, site: `https://www.uppermarlboromd.gov/`, image: img.marlboro},
    {name: `Pine County, MN`, site: `https://www.co.pine.mn.us/`, image: img.pinecounty},
    {name: `Franklin, MI`, site: `https://www.franklin.mi.us/`, image: img.franklinmi},
    {name: `Somerset County, MD`, site: `https://www.somersetmd.us/`, image: img.somerset},
    {name: `Amelia County, VA`, site: `http://www.ameliacova.com/`, image: img.amelia},
    {name: `Carter County, OK`, site: `http://www.cartercountyok.us/`, image: img.carterok},
    {name: `Blue Ashedc OH`, site: `http://www.blueashadvance.com/`, image: img.blueashoh},
    {name: `Milford Township, MI`, site: `http://www.milfordtownship.com/`, image: img.milfordmi},
    {name: `Caribou County Sheriff`, site: `https://www.cariboucountysheriff.com/`, image: img.cariboucounty},
    {name: `Lakeport, CA`, site: `https://www.cityoflakeport.com/`, image: img.lakeport},
    {name: `Allendale County, SC`, site: `https://www.allendalecounty.com/`, image: img.allendale},
    {name: `El Campo, TX`, site: `https://www.cityofelcampo.org/`, image: img.elcampo},
    {name: `Bella Vista, AR`, site: `https://www.bellavistaar.gov/`, image: img.bellavista},
    {name: `Ogle County, IL`, site: `https://oglecounty.org/`, image: img.oglecounty},
  ];
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
    color: white;
    font-size: 18px;
    text-align: center;
  }
  .site_img{
    width:100%;
    min-height:300px;
    max-height: 350px;
  }
  .site_name{
    background: var(--black);
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
    <img class="image_me" src="{img.DeMarc_Johnson}" alt="An image of the creator of this page, DeMarc Johnson">
    <p class="summary">When looking at these sites use the inspector or the view source to check the top of either layout.css file or the script.js to see my signutare</p>
  </section>
  <section>
    <div class="swiper-container">
      <div class="site_list swiper-wrapper">
        {#each cityNames as cityName}
        <a class="sites_link swiper-slide" href="{cityName.site}">
          <p class="site_name">{cityName.name}</p>
          <img class="site_img" src="{cityName.image}" alt="An image of the {cityName.name} Site">
        </a> 
        {/each}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</main>
<Footer/>