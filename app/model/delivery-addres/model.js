const {Schema, model} = require('mongoose')

const DeliveryAddressSchema = Schema({

    nama: {
        type: String,
        required: [true, 'Nama alamat harus diisi'],
        maxLength: [255, 'Panjang maksimal nama alamat adalah 255']
    },

    kelurahan: {
        type: String,
        required: [true, 'Nama kelurahan harus diisi'],
        maxLength: [255, 'Panjang maksimal kelurahan adalah 255'] 
    },

    kecamatan: {
        type: String,
        required: [true, 'Nama kecamatan harus diisi'],
        maxLength: [255, 'Panjang maksimal kecamatan adalah 255']
    },

    kabupaten: {
        type: String,
        required: [true, 'Nama kabubaten harus diisi'],
        maxLength: [255, 'Panjang maksimal kabupaten adalah 255']
    },

    provinsi: {
        type: String,
        required: [true, 'Nama provinsi harus diisi'],
        maxLength: [255, 'Panjang maksimal provinsi adalah 255']
    },

    detail: {
        type: String,
        required: [true, 'detail alamat harus diisi'],
        maxLength: [255, 'Panjang maksimal detail alamat adalah 255']
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }    
}, {timestamps: true});

module.exports = model('DeliveryAddress', DeliveryAddressSchema)