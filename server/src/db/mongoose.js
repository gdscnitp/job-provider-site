const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dscnitp_webdept_worklink:dscnitp_webdept_worklink@cluster0.glrlk.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

