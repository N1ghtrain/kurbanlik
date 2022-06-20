const { json } = require('express/lib/response');
const Listing = require('./models/listingModel');


exports.createListing = async (req, res) => {
    try {
        console.log("createListing try");
        const listing = await Listing.create(req.body);
        console.log(listing.name)
        res.status(201).json({
            status: 'success',
            listing,
        });
    } catch (error) {
        console.log("hata")
        res.status(400).json({
            status: 'failed',
            error,
        });
    }
};


exports.deleteListing = async (req, res) => {
    Listing.findOneAndRemove({ name: req.body.name }, (error, deletedListing) => {
        if (!error) {
            console.log(deletedListing)
            res.status(201).json({
                status: 'success',
                deletedListing
            });
        }
    })
};


/* exports.getListing = async (req, res) => {
    try{}
    Listing.findOne({ name: req.body.name }, (error, foundListing) => {
        if (!error)
            foundListing = req.body
            console.log(foundListing)
            res.status(200).json({
                status: 'success',
                foundListing
            })
        })
        res.status(400).json({
        status: 'failed',
        error,
        });
}; */

exports.getListing = async (req, res) => {
    try {
        const foundListing = await Listing.findOne({ name: req.body.name })
        console.log(foundListing)
        res.status(200).json({
            status: 'success',
            foundListing
        })      
    } catch (error) {
        console.log("hata")
        res.status(400).json({
            status: 'failed',
            error,
        });
    }
};

exports.showALL = async (req, res) => {
        try {
            const foundListing = await Listing.find()
            res.status(200).json({
                status: 'success',
                foundListing
            })      
        } catch (error) {
            console.log("hata")
            res.status(400).json({
                status: 'failed',
                error,
            });
        }
};

