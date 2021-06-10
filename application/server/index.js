const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const store = ('./db/store');
const WEB_PORT = process.env.WEB_PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

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

app.post('/api/users', (req, res, next) => {
    const { firstName, lastName, age } = req.body;
    let ageInt = parseInt(age);

    if (firstName && lastName && ageInt) {
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
        .createUser(req.body.firstName, req.body.lastName, req.body.age)
        .then(createdUser => res.status(201).send(createdUser))
        .catch(error =>
          res.status(500).send({ error: "Unable to insert the user" })
        );
});

app.get('/api/users', (req, res, next) => {
    store.getAllUsers().then(users => res.status(200).send(users));
});


// Proxy is setup so any axios requests are sent to this Node api server
app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Any other GET requests which are not handled will return to React app 
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(WEB_PORT, () => {
    console.log(`Server listening on ${WEB_PORT}`);
});