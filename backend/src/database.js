const mongoose=require('mongoose')

URI=('mongodb+srv://root:root@cluster-smile-dent.o9lcmw1.mongodb.net/?retryWrites=true&w=majority')

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false  //cambiar a true si da error
})
    .then(db=>console.log("Base de datos conectada correctamente"))
    .catch(error=>console.log(error))
module.exports=mongoose