const express = require('express');
const path = require('path');
const dataBase = require('./dataBase').getInstance();
const upload = require('./multer');

const cors = require('cors');
const app = express();
const AllHotDog = require('./controllers/AllHotDog');
const CreateHotDog = require('./controllers/createNewHotDog');
const UpdateHotDog = require('./controllers/uppdateHotDog');
const DeleteHotDog = require('./controllers/deleteHotDog');
const OneHotDog = require('./controllers/OneHotdOG');
const AddPhoto = require('./controllers/AddPhoto');
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods","GET, HEAD, OPTIONS, POST, PUT, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(cors());
app.options('*', cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dataBase.setModels();



app.get ('/HotDog', AllHotDog);
app.post('/HotDog/photo/:id',upload.fields([{name: 'photo', maxCount: 1}])  ,AddPhoto);
app.post('/HotDog' ,CreateHotDog);
app.put('/HotDog/:id', UpdateHotDog);
app.delete('/HotDog/:id', DeleteHotDog);
app.get('/HotDog/:id', OneHotDog);





app.listen(3000, err => {
    if (err) console.log(err);
    console.log('Server listen on port 3000');
});
