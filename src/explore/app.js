import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";

let hello = "explore";
console.log({ hello });

let map = new ArcGISMap({ basemap: "topo-vector" });
let view = new MapView({
	container: "mapDiv",
	center: [-80, 40],
	zoom: 10,
	map,
});
console.log({ view });

let bg = new BasemapGallery({ view });
let bgExpand = new Expand({
	container: document.createElement("div"),
	content: bg,
});

view.ui.add(bgExpand, "top-right");
console.log({ bg, bgExpand });
