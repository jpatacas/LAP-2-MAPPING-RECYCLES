const Geo = require('../models/geo')

async function getData(req,res) {
    try {
        const geoJsonData = await Geo.getFeatures()

        //console.log(geoJsonData)
        res.json(geoJsonData)
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}

async function getIdDescr(req, res) {
    try {
        const idDescr = await Geo.getIdDescription()
        res.json(idDescr)
    } catch (error) {
        res.status(500).json({"error": error.message})        
    }
}

module.exports = {
    getData, getIdDescr
}