from traitlets import Unicode, Bool

from .leaflet import Layer


class EsriVectorLayer(Layer):
    _view_name = Unicode('EsriVectorLayerView').tag(sync=True)
    _model_name = Unicode('EsriVectorLayerModel').tag(sync=True)

    name=Unicode("").tag(sync=True)
    basemapkey = Unicode("ArcGIS:Streets").tag(sync=True)
    apikey = Unicode("").tag(sync=True, o=True)
    base = Bool(True).tag(sync=True)
