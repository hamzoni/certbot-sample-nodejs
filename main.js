const express = require('express')
const https = require('https');
const app = express()
const port = 3000
const fs = require('fs');
const os = require("os");
const hostname = os.hostname();

const privateKey  = fs.readFileSync('ssl/privkey1.pem', 'utf8');
const certificate = fs.readFileSync('ssl/fullchain1.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};
const appPort = 8443;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

console.log(`Server is running at https://${hostname}:${appPort}`)

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(appPort);