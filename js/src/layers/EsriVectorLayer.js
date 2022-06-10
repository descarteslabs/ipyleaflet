const L = require('../leaflet.js');
const layer = require('./Layer.js');

export class EsriVectorLayerModel extends layer.LeafletLayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'EsriVectorLayerView',
      _model_name: 'EsriVectorLayerModel',
      
      basemapkey: "ArcGIS:Streets",
      apikey: ""
    };
  }
}

export class EsriVectorLayerView extends layer.LeafletLayerView {
  create_obj() {
    this.obj = L.esri.Vector.vectorBasemapLayer(this.model.get("basemapkey"), this.get_options());
  }
}
