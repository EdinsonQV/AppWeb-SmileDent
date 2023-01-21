const mongoose=require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const uri= 'mongodb+srv://userAdmin:userAdmin@smiledent.w8li3xp.mongodb.net/?retryWrites=true&w=majority';
MongoClient.connect(uri, {useUnifiedTopology: true}, (err,client)=>{
    if(err) return console.log(err);
    console.log("Base de datos conectada correctamente");
})
//URI=('mongodb+srv://userAdmin:user@admin1234@smiledent.w8li3xp.mongodb.net/?retryWrites=true&w=majority')

/*mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false  //cambiar a true si da error
})
    .then(db=>console.log("Base de datos conectada correctamente"))
    .catch(error=>console.log(error))*/
module.exports=MongoClient