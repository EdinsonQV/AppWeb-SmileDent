'use strict'

const mongoose = require('mongoose')
const Schema =mongoose.Schema

const ProductSchema= new Schema({
    nombreProducto: String,
    descripcion: String,
    categoria:String,
    costo: Number,
    imgURL:String,

},{
    timestamps: true,
    versionKey: false
})

module.exports =  mongoose.model('Product', ProductSchema)