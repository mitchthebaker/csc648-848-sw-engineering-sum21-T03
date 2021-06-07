const path = require('path');
const express = require('express');
const PORT = 3001;

const app = express();

// Allow Node to server files from built from React app 
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Proxy is setup so any axios requests are sent to this Node api server
app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Any other GET requests which are not handled will return to React app 
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});