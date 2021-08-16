const mongoose = require('mongoose')
require('dotenv').config({path:'./config/.env'})

const connectDataBase = async()=> {
                    try {
                                        await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
                                        console.log(`Database connection successful`)
                                        }catch (error) { 
                                        console.log('Database connection error')
                    }
}

module.exports = connectDataBase;