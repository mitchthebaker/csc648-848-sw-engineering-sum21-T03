const path = require('path');
require('dotenv').config({ path: '../.env' });

const express = require('express');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const store = require('./db/store');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(cors());
app.use(session({
    genid: function(req) {
        return uuidv4();
    },
    secret: 'zN9be284FzycJNvgtM5LWLoda9dauCDznqFQR6hY',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../client/public/', 'uploads'),
    filename: function(req, file, cb) {
        // null as first argument means no error
        cb(null, Date.now() + '-' + file.originalname)
    }
});

// Allow Node to server files from built from React app 
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api/users/:id', (req, res, next) => {
    if (req.params.hasOwnProperty("id") && !isNaN(parseInt(req.params.id))) {
        next();
    } 
    else {
        console.log("Request invalid");
        res.status(400).send({ error: "User id should be a number" });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: "Internal server error" });
});

app
    .get('/api/users/:id', (req, res) => {
        store
            .getUserById(req.params.id)
            .then(user => res.status(200).send(user))
            .catch(error => res.status(404).send({ error: error.message }));
    })
    .delete((req, res) => {
        store
            .deleteUserById(req.params.id)
            .then(result => res.status(204).send())
            .catch(error => res.status(400).send({ error: error.message }));
    })
    .put((req, res) => {
        let userId = parseInt(req.params.id);
        const { firstName, lastName, age } = req.body;
        const ageInt = parseInt(age);
        
        if (firstName && lastName && ageInt) {
            store
                .updateUser(userId, {
                  firstName: firstName,
                  lastName: lastName,
                  age: ageInt
                })
                .then(result => res.status(200).send(result))
                .catch(error => res.status(404).send({ error: error.message }));
        } 
        else {
            res.status(400).send({
              error: "The payload is wrong!"
            });
        }
    });

app.post('/api/register', (req, res, next) => {
    const { username, password, confirmPassword} = req.body;
    
    if (username && password && confirmPassword) {
        console.log(username + " " + password + " " + confirmPassword);
        next();
    } 
    else {
        res.status(400).send({
          error: "The payload is wrong!"
        });
    }
},
(req, res) => {
    store
        .createUser(req.body.username, req.body.password)
        .then((createdUser) => {
            console.log(createdUser);
            res.status(201).send(createdUser);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({ error: "Unable to insert the user" });
        });
});

app.post('/api/login', (req, res, next) => {
    const { username, password } = req.body;

    if(username && password) {
        console.log(username + " " + password);
        next();
    }
    else {
        res.status(400).send({
            error: "The payload is wrong!"
          });
    }
},
(req, res) => {
    store
        .loginUser(req.body.username, req.body.password)
        .then((loggedInUser) => {
            console.log(loggedInUser);
            req.session.username = loggedInUser.username;
            console.log(req.session);
            res.status(201).send(loggedInUser);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({ error: "Unable to login user" });
        })
});

app.post('/api/upload-product', async (req, res) => {
    try {
        let upload = multer({ storage: storage }).single('file');

        upload(req, res, function(err) {

            // req.file contains information of uploaded file
            // req.body contain information of text fields

            if(!req.file) {
                return res.send('Please select an image to upload');
            }
            else if(err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if(err) {
                return res.send(err);
            }

            const aProduct = {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                image: req.file.filename
            };

            console.log(aProduct);

            store
                .uploadProduct(aProduct)
                .then((createdProduct) => {
                    console.log(createdProduct);
                    res.status(201).send(createdProduct);
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).send({ error: "Unable to create a new product" });
                });
        });
    }
    catch(err) {
        console.log(err);
    }
});

app.get('/api/product-categories', async (req, res, next) => {

    try {
        if(req.query) {
            console.log(req.query);

            store
                .getAllProductsWith(req.query.category)
                .then((products) => {
                    console.log(products);
                    res.status(201).send(products);
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).send({ error: "Unable to create a new product" });
                });
        }
    }
    catch(err) {
        console.log(err);
    }
});

app.get('/api/products', (req, res, next) => {
    store.getAllProducts().then(products => res.status(200).send(products));
});

app.get('/api/users', (req, res, next) => {
    store.getAllUsers().then(users => res.status(200).send(users));
});


// Proxy is setup so any axios requests are sent to this Node api server
app.get('/api', (req, res) => {
    res.json({ message: "Hello from api server!" });
});

// Any other GET requests which are not handled will return to React app 
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(process.env.WEB_PORT, () => {
    console.log(`Server listening on ${process.env.WEB_PORT}`);
});