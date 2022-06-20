var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const listingFunctions = require('../listing.js');


//////////////// 7 saat fark etmem sürdü, bu olmadan req.body ile verileri okuyamıyoruz, undefined geliyor
//middleware
router.use(express.json())
router.use(express.urlencoded({extended: true}))





router.get('/', listingFunctions.getListing);
router.post('/', listingFunctions.createListing);
router.delete('/', listingFunctions.deleteListing);

module.exports = router;