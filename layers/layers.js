ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([312432.101326, 1345392.475407, 646122.021777, 1518416.878604]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LIMITESCOMMUNESBMC_1 = new ol.format.GeoJSON();
var features_LIMITESCOMMUNESBMC_1 = format_LIMITESCOMMUNESBMC_1.readFeatures(json_LIMITESCOMMUNESBMC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_LIMITESCOMMUNESBMC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCOMMUNESBMC_1.addFeatures(features_LIMITESCOMMUNESBMC_1);
var lyr_LIMITESCOMMUNESBMC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITESCOMMUNESBMC_1, 
                style: style_LIMITESCOMMUNESBMC_1,
                popuplayertitle: 'LIMITES COMMUNES BMC',
                interactive: true,
                title: '<img src="styles/legend/LIMITESCOMMUNESBMC_1.png" /> LIMITES COMMUNES BMC'
            });
var format_COMMUNESCOUVERTES_2 = new ol.format.GeoJSON();
var features_COMMUNESCOUVERTES_2 = format_COMMUNESCOUVERTES_2.readFeatures(json_COMMUNESCOUVERTES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_COMMUNESCOUVERTES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNESCOUVERTES_2.addFeatures(features_COMMUNESCOUVERTES_2);
var lyr_COMMUNESCOUVERTES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNESCOUVERTES_2, 
                style: style_COMMUNESCOUVERTES_2,
                popuplayertitle: 'COMMUNES COUVERTES',
                interactive: true,
                title: '<img src="styles/legend/COMMUNESCOUVERTES_2.png" /> COMMUNES COUVERTES'
            });
var format_AGRIJEUNE_3 = new ol.format.GeoJSON();
var features_AGRIJEUNE_3 = format_AGRIJEUNE_3.readFeatures(json_AGRIJEUNE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_AGRIJEUNE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIJEUNE_3.addFeatures(features_AGRIJEUNE_3);
var lyr_AGRIJEUNE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIJEUNE_3, 
                style: style_AGRIJEUNE_3,
                popuplayertitle: 'AGRIJEUNE',
                interactive: true,
                title: '<img src="styles/legend/AGRIJEUNE_3.png" /> AGRIJEUNE'
            });
var format_PROVALECV_4 = new ol.format.GeoJSON();
var features_PROVALECV_4 = format_PROVALECV_4.readFeatures(json_PROVALECV_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PROVALECV_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVALECV_4.addFeatures(features_PROVALECV_4);
var lyr_PROVALECV_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVALECV_4, 
                style: style_PROVALECV_4,
                popuplayertitle: 'PROVALE-CV',
                interactive: true,
                title: '<img src="styles/legend/PROVALECV_4.png" /> PROVALE-CV'
            });
var format_PACAO_5 = new ol.format.GeoJSON();
var features_PACAO_5 = format_PACAO_5.readFeatures(json_PACAO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PACAO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PACAO_5.addFeatures(features_PACAO_5);
var lyr_PACAO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PACAO_5, 
                style: style_PACAO_5,
                popuplayertitle: 'PACAO',
                interactive: true,
                title: '<img src="styles/legend/PACAO_5.png" /> PACAO'
            });
var format_ARD_6 = new ol.format.GeoJSON();
var features_ARD_6 = format_ARD_6.readFeatures(json_ARD_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_ARD_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARD_6.addFeatures(features_ARD_6);
var lyr_ARD_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARD_6, 
                style: style_ARD_6,
                popuplayertitle: 'ARD',
                interactive: true,
                title: '<img src="styles/legend/ARD_6.png" /> ARD'
            });
var format_SEMER_7 = new ol.format.GeoJSON();
var features_SEMER_7 = format_SEMER_7.readFeatures(json_SEMER_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_SEMER_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEMER_7.addFeatures(features_SEMER_7);
var lyr_SEMER_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEMER_7, 
                style: style_SEMER_7,
                popuplayertitle: 'SEMER',
                interactive: true,
                title: '<img src="styles/legend/SEMER_7.png" /> SEMER'
            });
var format_PASAR_8 = new ol.format.GeoJSON();
var features_PASAR_8 = format_PASAR_8.readFeatures(json_PASAR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PASAR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASAR_8.addFeatures(features_PASAR_8);
var lyr_PASAR_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASAR_8, 
                style: style_PASAR_8,
                popuplayertitle: 'PASAR',
                interactive: true,
                title: '<img src="styles/legend/PASAR_8.png" /> PASAR'
            });
var format_PCAE_9 = new ol.format.GeoJSON();
var features_PCAE_9 = format_PCAE_9.readFeatures(json_PCAE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PCAE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCAE_9.addFeatures(features_PCAE_9);
var lyr_PCAE_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCAE_9, 
                style: style_PCAE_9,
                popuplayertitle: 'PCAE',
                interactive: true,
                title: '<img src="styles/legend/PCAE_9.png" /> PCAE'
            });
var format_USOFORAL_10 = new ol.format.GeoJSON();
var features_USOFORAL_10 = format_USOFORAL_10.readFeatures(json_USOFORAL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_USOFORAL_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USOFORAL_10.addFeatures(features_USOFORAL_10);
var lyr_USOFORAL_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USOFORAL_10, 
                style: style_USOFORAL_10,
                popuplayertitle: 'USOFORAL',
                interactive: true,
                title: '<img src="styles/legend/USOFORAL_10.png" /> USOFORAL'
            });
var format_PROJETAVENIR_11 = new ol.format.GeoJSON();
var features_PROJETAVENIR_11 = format_PROJETAVENIR_11.readFeatures(json_PROJETAVENIR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PROJETAVENIR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJETAVENIR_11.addFeatures(features_PROJETAVENIR_11);
var lyr_PROJETAVENIR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROJETAVENIR_11, 
                style: style_PROJETAVENIR_11,
                popuplayertitle: 'PROJET AVENIR',
                interactive: true,
                title: '<img src="styles/legend/PROJETAVENIR_11.png" /> PROJET AVENIR'
            });
var format_DOUNDALSOUF_12 = new ol.format.GeoJSON();
var features_DOUNDALSOUF_12 = format_DOUNDALSOUF_12.readFeatures(json_DOUNDALSOUF_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_DOUNDALSOUF_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOUNDALSOUF_12.addFeatures(features_DOUNDALSOUF_12);
var lyr_DOUNDALSOUF_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DOUNDALSOUF_12, 
                style: style_DOUNDALSOUF_12,
                popuplayertitle: 'DOUNDAL SOUF',
                interactive: true,
                title: '<img src="styles/legend/DOUNDALSOUF_12.png" /> DOUNDAL SOUF'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LIMITESCOMMUNESBMC_1.setVisible(true);lyr_COMMUNESCOUVERTES_2.setVisible(true);lyr_AGRIJEUNE_3.setVisible(true);lyr_PROVALECV_4.setVisible(true);lyr_PACAO_5.setVisible(true);lyr_ARD_6.setVisible(true);lyr_SEMER_7.setVisible(true);lyr_PASAR_8.setVisible(true);lyr_PCAE_9.setVisible(true);lyr_USOFORAL_10.setVisible(true);lyr_PROJETAVENIR_11.setVisible(true);lyr_DOUNDALSOUF_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LIMITESCOMMUNESBMC_1,lyr_COMMUNESCOUVERTES_2,lyr_AGRIJEUNE_3,lyr_PROVALECV_4,lyr_PACAO_5,lyr_ARD_6,lyr_SEMER_7,lyr_PASAR_8,lyr_PCAE_9,lyr_USOFORAL_10,lyr_PROJETAVENIR_11,lyr_DOUNDALSOUF_12];
lyr_LIMITESCOMMUNESBMC_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REG': 'REG', 'DEPT': 'DEPT', 'CAV': 'CAV', 'CCRCA': 'CCRCA', 'Milieu': 'Milieu', });
lyr_COMMUNESCOUVERTES_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_AGRIJEUNE_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR.': 'CAR.', 'TELEPHONE': 'TELEPHONE', });
lyr_PROVALECV_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PACAO_5.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'CAV': 'CAV', 'COMMUNE': 'COMMUNE', 'Milieu': 'Milieu', });
lyr_ARD_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_SEMER_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PASAR_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PCAE_9.set('fieldAliases', {'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU_2': 'MILIEU_2', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_USOFORAL_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'COMCOUV24': 'COMCOUV24', 'TELEPHONE': 'TELEPHONE', });
lyr_PROJETAVENIR_11.set('fieldAliases', {'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU_2': 'MILIEU_2', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_DOUNDALSOUF_12.set('fieldAliases', {'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU_2': 'MILIEU_2', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR.': 'CAR.', 'TELEPHONE': 'TELEPHONE', });
lyr_LIMITESCOMMUNESBMC_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'REG': 'TextEdit', 'DEPT': 'TextEdit', 'CAV': 'TextEdit', 'CCRCA': 'TextEdit', 'Milieu': 'TextEdit', });
lyr_COMMUNESCOUVERTES_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_AGRIJEUNE_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR.': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PROVALECV_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PACAO_5.set('fieldImages', {'FID': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'CAV': 'TextEdit', 'COMMUNE': 'TextEdit', 'Milieu': 'TextEdit', });
lyr_ARD_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_SEMER_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PASAR_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PCAE_9.set('fieldImages', {'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU_2': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_USOFORAL_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'COMCOUV24': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PROJETAVENIR_11.set('fieldImages', {'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU_2': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_DOUNDALSOUF_12.set('fieldImages', {'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU_2': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR.': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_LIMITESCOMMUNESBMC_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'REG': 'header label - visible with data', 'DEPT': 'header label - visible with data', 'CAV': 'hidden field', 'CCRCA': 'header label - visible with data', 'Milieu': 'hidden field', });
lyr_COMMUNESCOUVERTES_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_AGRIJEUNE_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR.': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PROVALECV_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PACAO_5.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'CAV': 'hidden field', 'COMMUNE': 'header label - visible with data', 'Milieu': 'hidden field', });
lyr_ARD_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_SEMER_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PASAR_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PCAE_9.set('fieldLabels', {'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU_2': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_USOFORAL_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'COMCOUV24': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PROJETAVENIR_11.set('fieldLabels', {'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU_2': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_DOUNDALSOUF_12.set('fieldLabels', {'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU_2': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR.': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_DOUNDALSOUF_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});