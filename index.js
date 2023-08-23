const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());
app.use(cors())

const libDir = path.join(__dirname, './data/');


console.log(libDir);

app.get('/', (req, res) => {
    fs.readFile(`${libDir}/data.json`, 'utf-8', (err, data) => {
        let text = JSON.parse(data);
        const random_number = Math.ceil(Math.random() * text.result.length);
        let response = text.result[random_number];
        //console.log(text.result.length);
        console.log(random_number, ':', response);
        res.status(200)
            .json(response)

        //console.log('hello');
    })

});
app.listen(5000, () => {
    console.log('listening to port 5000');
})