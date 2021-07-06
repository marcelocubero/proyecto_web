// Mapa Leaflet
var mapa = L.map('mapid').setView([9.4, -84.25], 8);

var capas_base = {
	
	"OSM": L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', 
    {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
	),

	"Watercolor": L.tileLayer.provider('Stamen.Watercolor'),
   
	"Esri World Imagery": L.tileLayer.provider('Esri.WorldImagery'),
  
	"CartoDB Dark Matter": L.tileLayer.provider('CartoDB.DarkMatter'),
	
	"USGS US Imagery": L.tileLayer.provider('USGS.USImagery'),
  
  
	"GEBCO LATEST": L.tileLayer.wms('https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv?',
	{
	layers: 'GEBCO_LATEST',
	format: 'image/png'
	})
	}

// Control de capas
control_capas = L.control.layers(capas_base).addTo(mapa);	

	    
// Se activa una capa base del control
capas_base['CartoDB Dark Matter'].addTo(mapa);	

// Control de escala
L.control.scale({position: 'topright', imperial: false}).addTo(mapa);




var capa_rdn = L.imageOverlay("https://marcelocubero.github.io/capas/bio_rdm.png", 
	[[11.2186629710523480, -87.0977137854603995], 
	[5.5032827060751659, -82.5553380850013383]], 
	{opacity:0.5}
).addTo(mapa);
control_capas.addOverlay(capa_rdn, 'Rango Diurno Medio');
function updateOpacity_rdn() {
  document.getElementById("span-opacity_rdn").innerHTML = document.getElementById("sld-opacity_rdn").value;
  capa_rdn.setOpacity(document.getElementById("sld-opacity_rdn").value);
}
