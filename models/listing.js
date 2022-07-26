/*========================================
        DEPENDENCIES
========================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*========================================
        SCHEMAS
========================================*/
const listingSchema = new Schema(
	{
        // primary photo
        primary_photo: Object,
        // source []
        source: Array,
        // tags []
        tags: Array,
        // permalink
        permalink: String,
        // status
        Status: String,
        // list_date
        list_date: String,
        // open_house
        open_houses: Array,
        // tax_record []
        tax_record: Object,
        // branding []
        branding: Array,
        // photos []
        photos: Array,
        // list_price
        list_price: Number,
        // property_id
        propert_id: String,
        // flags {}
        flags: Object,
        // community
        community: Object,
        // description {}
        description: Object,
        // listing_id
        listing_id: String,
        // price_reduced_amount
        price_reduced_amount: Number,
        // location {}
        location: Object,
	},
	{
		timestamps: true
	}
);

/*========================================
				EXPORTS
========================================*/
module.exports = mongoose.model("Listing", listingSchema);