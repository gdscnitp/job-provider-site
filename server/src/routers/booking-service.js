const express= require('express')
const mongoose=require('mongoose');
const router = express.Router();
const Service = require("../models/booked-services")
router.post('/book_services',(req,res)=>{
    const service = new Service({
        worker_name:req.body.name,
        customer_name:"Custom",   //Right now hard-coded
        service_provided:req.body.type,
        // worker_contact:req.body.contact,
        customer_contact:"9076543211",    //Right now hard-coded
        cost_of_work:req.body.charge,
        location:"New Delhi",    //Right now hard-coded, since there is no sign up - sign in yet
        createdAt:Date(),
        date_for_booking: (Date())[8]+(Date())[9]+'-'+(Date())[4]+(Date())[5]+(Date())[6]+'-'+(Date())[11]+(Date())[12]+(Date())[13]+(Date())[14] ,
        time_for_booking: (Date())[16]+(Date())[17]+(Date())[18]+(Date())[19]+(Date())[20]+(Date())[21]+(Date())[22]+(Date())[23]

    })
    service.save().then(()=>{
        console.log(service)
        console.log("Service saved")
    })
















    
    res.redirect('/')



})
module.exports = router;
