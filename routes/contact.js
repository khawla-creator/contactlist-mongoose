const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact')

//test
// methode get
// router.get('/test',(req,res)=>{
//                     res.send('hello every bady')
// });

// add new contact
// methode post 
// req.body
router.post('/', async (req,res)=>{
                    const {name,email,age}=req.body
                    try{
                    const contact = await Contact.findOne({email})
                    if (contact) {
                                        return res.status(400).send('contact is already axist')
                    }
                    const newContact= new Contact({
                                        name,email,age
                    }) 
                    await newContact.save()
                    res.status(200).send({msg:'contact added',newContact})
                    }catch (error) {
                    res.status(500).send({msg:'impossible to add contact'})
                    }
})

router.get('/',async (req,res)=>{
                    try{
                    const contacts = await Contact.find()
                    res.status(200).send({msg : 'all contacts', contacts})
                    } catch (error) {
                    res.status(500).send({msg:'impossible to get contact',error})
                    }
})
//======================
router.delete('/:ID',async (req,res)=>{
                    const {ID} = req.params
                    try {
                                        await Contact.findByIdAndDelete(ID) // un problem ici 
                                        res.status(200).send('contact deleted')
                    } catch (error) {
                                  res.status(500).send({msg:'impossible to delete contact', error})      
                    }
})

router.put('/:ID',async(req,res)=>{
                    const {ID}= req.params
                    try {
                                const contact = await Contact.findByIdAndUpdate(ID,{$set:{...req.body}})
                                res.status(200).send('contact update')        
                    } catch (error) {
                                        res.status(500).send({msg:'impossible to update contact', error})      
                    }
})


router.get('/ID',async (req,res)=>{
                    const {ID}= req.params
                    try {
                                        const contact = await Contact.findById(ID)
                                        res.status(200).send({msg: 'cpntact', contact})
                    } catch (error) {
                                        res.status(500).send({msg:'impossible to get contact', error})     
                    }
})

module.exports= router;