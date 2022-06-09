from traitlets import Unicode

from .leaflet import Layer


class EsriVectorLayer(Layer):
    _view_name = Unicode('EsriVectorLayerView').tag(sync=True)
    _model_name = Unicode('EsriVectorLayerModel').tag(sync=True)

    basemapKey = Unicode("ArcGIS:Streets").tag(sync=True, o=True)
    apikey = Unicode("").tag(sync=True, o=True)
