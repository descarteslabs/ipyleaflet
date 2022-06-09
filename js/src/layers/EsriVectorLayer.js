const L = require('../leaflet.js');
const layer = require('./Layer.js');

export class EsriVectorLayerModel extends layer.LeafletLayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'EsriVectorLayerView',
      _model_name: 'EsriVectorLayerModel',
      
      basemapKey: "ArcGIS:Streets",
      apikey: ""
    };
  }
}

export class EsriVectorLayerView extends layer.LeafletLayerView {
  create_obj() {
    this.obj = L.esri.Vector.vectorBasemapLayer(this.model.get("basemapKey"), this.get_options());
  }
}
