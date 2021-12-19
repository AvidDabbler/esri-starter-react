import { loadModules } from 'esri-loader';

class MapController {
  initMap = async () => {
    const [Map, MapView] = await loadModules(["esri/Map", "esri/views/MapView"]);
    this._map = new Map({
      basemap: "streets-vector"
    });
    // Create a MapView instance (for 2D viewing) and reference the map instance
    this._mapView = new MapView({
      container: "map",
      map: this._map,
      zoom: 4,
      center: [15, 65]
    });
  }
}

export const mapController = new MapController()