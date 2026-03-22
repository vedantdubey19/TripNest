const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding'); 
const map_Token = process.env.MAP_TOKEN;
const geocodingClient = map_Token ? mbxGeocoding({ accessToken: map_Token }) : null;

module.exports.index = async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing = async(req,res)=>{
   let{id} = req.params;
   const listing = await Listing.findById(id)
   .populate({
        path:"reviews",
        populate: {
            path:"author",
        },
   })
   .populate("owner");
   if(!listing){
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
   }
   res.render("listings/show.ejs", {listing});
};

module.exports.createListing = async(req,res,next)=>{
    let response = {
        body: {
            features: [{ geometry: { type: 'Point', coordinates: [0, 0] } }]
        }
    };

    if (geocodingClient && req.body.listing.location) {
        response = await geocodingClient.forwardGeocode({
            query: req.body.listing.location,
            limit: 1
        }).send();
    }

    let url = req.file ? req.file.path : "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    let filename = req.file ? req.file.filename : "default";

    const newListing = new Listing(req.body.listing);
    newListing.owner= req.user._id;
    newListing.image = {url , filename};
    
    if (response.body.features.length > 0) {
        newListing.geometry = response.body.features[0].geometry;
    } else {
        newListing.geometry = { type: 'Point', coordinates: [0, 0] };
    }

    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async(req,res)=>{
   let{id} = req.params;
   const listing = await Listing.findById(id);
   if(!listing){
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
   }

   let originalImageUrl = listing.image.url
   originalImageUrl = originalImageUrl.replace("/upload" , "/upload/w_300");
   res.render("listings/edit.ejs",{listing , originalImageUrl});
};

module.exports.updateListing = async(req,res)=>{
        let{id} = req.params;
        let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

        if(typeof req.file !== "undefined"){
            let url = req.file.path;
            let filename = req.file.filename;
            listing.image = {url , filename};
            await listing.save();
        }
        req.flash("success", " Listing Updated!");
        res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async(req,res)=>{
    let{id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};



