const express = require('express');
const fd = require('formidable');
const app = express();

app.listen(4000);

app.post('/upload',(req,res) => {
    const form = new fd.IncomingForm();
    form.uploadDir = './';
    form.parse(req,(err,fields,files)=>{
        console.log(err);
        console.log(fields);
        console.log(files);
        res.send('success')
    })
})
