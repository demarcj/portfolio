<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import "../css/portfolio.css";
</script>

<Header/>
<main class="portfolio_main">
  <section>
    <h1>Portfolio</h1>
    <img class="image_me" src="https://drive.google.com/uc?id=0B4i47o5V7RiSVThKbTJ4VlY1aTA&export=download" alt="">
    <p class="summary">When looking at these sites use the inspector or the view source to check the top of either layout.css file or the script.js to see my signutare</p>
  </section>
  <section>
    <ul class="site_list">
      <li class="sites"><a class="sites_link" href="http://www.waxahachie.com/">Waxahachie, TX</a></li>
      <li class="sites"><a class="sites_link" href="http://avonpark.cc/">Avon Park, FL</a></li>
      <li class="sites"><a class="sites_link" href="https://www.villageofmatteson.org/">Matteson, IL</a></li>
      <li class="sites"><a class="sites_link" href="https://www.uppermarlboromd.gov/">Upper Marlboro, MD</a></li>
      <li class="sites"><a class="sites_link" href="https://www.co.pine.mn.us/">Pine County, MN</a></li>
      <li class="sites"><a class="sites_link" href="https://www.franklin.mi.us/">Franklin, MI</a></li>
      <li class="sites"><a class="sites_link" href="https://www.somersetmd.us/">Somerset County, MD</a></li>
      <li class="sites"><a class="sites_link" href="http://www.ameliacova.com/">Amelia County, VA</a></li>
      <li class="sites"><a class="sites_link" href="http://www.cartercountyok.us/">Carter County, OK</a></li>
      <li class="sites"><a class="sites_link" href="http://www.blueashadvance.com/">Blue Ashedc OH</a></li>
      <li class="sites"><a class="sites_link" href="http://www.milfordtownship.com/">Milford Township, MI</a></li>
      <li class="sites"><a class="sites_link" href="https://www.cariboucountysheriff.com/">Caribou County Sheriff</a></li>
      <li class="sites"><a class="sites_link" href="https://www.cityoflakeport.com/">Lakeport, CA</a></li>
      <li class="sites"><a class="sites_link" href="https://www.allendalecounty.com/">Allendale County, SC</a></li>
      <li class="sites"><a class="sites_link" href="https://www.cityofelcampo.org/">El Campo, TX</a></li>
      <li class="sites"><a class="sites_link" href="https://www.bellavistaar.gov/">Bella Vista, AR</a></li>
      <li class="sites"><a class="sites_link" href="https://oglecounty.org">Ogle County, IL</a></li>
    </ul>
  </section>
</main>
<Footer/>